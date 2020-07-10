import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController, LoadingController, AlertController, NavController } from '@ionic/angular';
import { PostProvider } from '../providers/post-provider';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss','bootstrap.min.css', 'style.css'],
})


export class FolderPage implements OnInit {
  public folder: string;
  list:any;
  public items = [{
    'text': 'Item 1',
    'src': 'https://ionicframework.com/docs/demos/api/card/madison.jpg'
  }];

  datastorage: any;
  name: string;
  visible: boolean;

  
  title: string = "";
  citta: string = "";
  rangePrezzo: string = "";
  


  disabledButton;

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
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.getData(); 
    
  }

  ionViewDidEnter() {
    this.storage.get('storage_xxx').then((res)=>{
      this.datastorage = res;
      this.name = ' - Benvenuto '+this.datastorage.username;
      this.visible = true;
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
        console.log(res.result);
        this.navCtrl.navigateRoot(['/search/Cerca']);
       


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

  getData(){
    return new Promise(resolve => {
      let body = {
        aksi: 'getdata'
      }

      this.accsPrvds.postData(body,'/file_aksi.php').subscribe((res:any) =>  {
       this.list = JSON.parse(JSON.stringify(res['result']));
     
      console.log(this.list);
      });
    });
 
 }


}
 