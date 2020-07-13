import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {PostProvider} from '../providers/post-provider';
import { HttpClient } from '@angular/common/http';
import {NavController,ToastController,LoadingController} from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { Storage } from '@ionic/storage';
import { element } from 'protractor';

declare var google;







@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  @ViewChild('map', { static: false }) mapElement: ElementRef;

  map: any;
  address: string;

  latitude: number;
  longitude: number;
  list:any;
  lista:any;
  rate=0;
  visible: boolean;
  datastorage: any;
  name: string;
  disabledButton;
  username: string;
  email: string = "";
  id_event: number;
  id_user: string;
  recensione: string ="";
  titolo: string ="";
  rating: number = 0;
  i: number = 0;
  index: number;
  filter: number;
  filtro: boolean = false;
  newlist: any;


 

  constructor(private geolocation: Geolocation,private nativeGeocoder: NativeGeocoder, private storage: Storage, public navCtrl: NavController, private http: HttpClient, private accsPrvds: PostProvider, private route: ActivatedRoute, private toastCtrl: ToastController, private loadingCtrl: LoadingController, private router: Router,) { }

  ngOnInit(): void {
    this.getData();
    this.getReview();
    
    //this.loadMap();
  } 

  ionViewDidEnter() {
    this.storage.get('storage_xxx').then((res)=>{
      this.datastorage = res;
      this.name = ' - Benvenuto '+this.datastorage.username;
      this.visible = true;
    });

    this.storage.get('storage_xxxxx').then((res)=>{
      this.newlist = res;
   
    });

    this.storage.get('storage_xxxxxx').then((res)=>{
      this.filtro = res;
   
    });
   
    this.storage.remove('storage_xxxxx');
    this.storage.remove('storage_xxxxxx');
   
  }

  async prosesLogout(){
    this.storage.clear();
    this.navCtrl.navigateRoot('/accedi/Login');
    const toast = await this.toastCtrl.create({
      message: 'Logout avvenuto',
      duration: 1500,
      position: 'bottom'
    });
    toast.present();
    this.visible = !this.visible;
  }

  onRate(rate) {
      console.log(rate)
      this.rating = rate;
    }
 

  
  getReview(){
    return new Promise(resolve => {
      let body = {
        aksi: 'getReview',
        id: this.route.snapshot.paramMap.get('id')
        
      }

      this.accsPrvds.postData(body,'/file_aksi.php').subscribe((res:any) =>  {
       this.lista = JSON.parse(JSON.stringify(res['result']));
      
      });
    });
 
 }

 
 getData(){
  return new Promise(resolve => {
    let body = {
      aksi: 'getdataDetail',
      id: this.route.snapshot.paramMap.get('id')
      
    }

    this.accsPrvds.postData(body,'/file_aksi.php').subscribe((res:any) =>  {
     this.list = JSON.parse(JSON.stringify(res['result']));
     console.log('lat '+this.list[0]['latitudine']+' long '+this.list[0]['longitudine']);
     this.loadMap(this.list[0]['latitudine'],this.list[0]['longitudine']);
    
    });
  });

}

 loadMap(latitudine,longitudine) {
  let options = {timeout: 10000, enableHighAccuracy: true, maximumAge: 3600};
  this.geolocation.getCurrentPosition(options).then((resp) => {
    console.log('lat '+latitudine+' long '+longitudine);
    this.latitude = resp.coords.latitude;
    this.longitude = resp.coords.longitude;

    let latLng = new google.maps.LatLng(latitudine, longitudine);
    let mapOptions: google.maps.MapOptions = {
      center: latLng,
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    }

    this.getAddressFromCoords(latitudine, longitudine);

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    this.map.addListener('dragend', () => {

      this.latitude = this.map.center.lat();
      this.longitude = this.map.center.lng();

      this.getAddressFromCoords(this.map.center.lat(), this.map.center.lng())
    });

  }).catch((error) => {
    console.log('Error getting location', error);
  });
}

getAddressFromCoords(lattitude, longitude) {
  console.log("getAddressFromCoords " + lattitude + " " + longitude);
  let options: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };

  this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
    .then((result: NativeGeocoderResult[]) => {
      this.address = "";
      let responseAddress = [];
      for (let [key, value] of Object.entries(result[0])) {
        if (value.length > 0)
          responseAddress.push(value);

      }
      responseAddress.reverse();
      for (let value of responseAddress) {
        this.address += value + ", ";
      }
      this.address = this.address.slice(0, -2);
    })
    .catch((error: any) => {
      this.address = "Address Not Available!";
    });

}

async tryReview(id_event,username, id_user) {
  this.id_event = id_event;
  if(this.datastorage.visualizza_nome == '1'){
    this.username = this.datastorage.name;
  }
  else{
    this.username = username;
  }
  this.id_user = id_user;
  console.log('evento: '+this.username);
  console.log(this.titolo);
  console.log(this.rating);
  if (this.rating == 0) {
    this.presentToast('Numero stelle richiesto');
  }
  else if (this.email == "") {
    this.presentToast('E-mail Obbligatoria');
  }
  else if (this.titolo == "") {
    this.presentToast('Titolo Richiesto');
  }
  else if (this.recensione == "") {
    this.presentToast('Recensione Obbligatoria');
  }
  else {
    this.disabledButton = true;
    const loader = await this.loadingCtrl.create({
      message: "Attendi per favore",
    });

    loader.present();

    console.log('Nome: ' + this.recensione);
    return new Promise(resolve => {
      let body = {
        aksi: 'insertReview',
        id_event: this.id_event,
        id_user: this.id_user,
        titolo: this.titolo,
        rating: this.rating,
        username: this.username,
        email: this.email,
        recensione: this.recensione

      }

      this.accsPrvds.postData(body, '/file_aksi.php').subscribe((res: any) => {

        if (res.success == true) {
          loader.dismiss();
          this.disabledButton = false;
          this.presentToast(res.msg);
           setTimeout(function() {
            window.location.reload();
          }, 5000);
          
        }
        else {
          this.disabledButton = false;
          loader.dismiss();
          this.presentToast(res.msg);
        }


      });
    });

  }

}

async presentToast(a) {
  const toast = await this.toastCtrl.create({
    message: a,
    duration: 1500,
    position: 'bottom'
  });

  toast.present();
}


    
 tryFilter() {
   let j =0;
  if(this.filter != null){
    for(let i=0;i<this.lista.length; i++){
      if(this.lista[i].rating == this.filter){
        this.newlist.push(
          {
            username:this.lista[i].username  ,
            title: this.lista[i].title,
            recensione: this.lista[i].recensione,
            rating: this.lista[i].rating
          }
        );
       this.filtro = true;
      }
     }
 } 

 this.storage.set('storage_xxxxx',this.newlist);
 this.storage.set('storage_xxxxxx',this.filtro); //create storage Session

}

deleteFilter() {
 this.filtro = false;

}

  }


