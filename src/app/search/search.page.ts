import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController, LoadingController, AlertController, NavController } from '@ionic/angular';
import { PostProvider } from '../providers/post-provider';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { empty } from 'rxjs';


@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss','bootstrap.min.css', 'style.css'],
})
export class SearchPage implements OnInit {

  datastorage: any;
  list: any;
  title: string = "";
  citta: string = "";
  rangePrezzo: string = "";
  visible: boolean;
  name: string;

  constructor(
    private activatedRoute: ActivatedRoute, 
    public navCtrl: NavController, 
    private http: HttpClient,
    private accsPrvds: PostProvider,
    private router: Router,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private storage: Storage,
    ) {
     }

  ngOnInit() {
    this.storage.get('storage_xxx').then((res)=>{
      this.datastorage = res;
      this.name = ' - Benvenuto '+this.datastorage.username;
      this.visible = true;
    });
  }

  
 

  ionViewDidEnter() {
    this.storage.get('storage_xxxx').then((res)=>{
      this.list = JSON.parse(JSON.stringify(res));
      console.log(this.list);
      if(this.list.length == 0){
       this.presentToast('Nessun risultato per la ricerca');
      }
      
    });
  }
  async trySearch() {
   
    return new Promise(resolve => {
      let body = {
        aksi: 'search',
        title: this.title,
        citta: this.citta,
        rangePrezzo: this.rangePrezzo

      }

      this.accsPrvds.postData(body, '/file_aksi.php').subscribe((res: any) => {
      this.storage.set('storage_xxxx',res.result); //create storage Session
      location.reload();
       

      });
    });

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

  async presentToast(a) {
    const toast = await this.toastCtrl.create({
      message: a,
      duration: 1500,
      position: 'top'
    });

    toast.present();
  }
}
