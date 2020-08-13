import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController, NavController } from '@ionic/angular';
import { PostProvider } from '../providers/post-provider';
import { Storage  } from '@ionic/storage';

@Component({
  selector: 'app-accedi',
  templateUrl: './accedi.page.html',
  styleUrls: ['./accedi.page.scss'],
})



export class AccediPage implements OnInit {


  username: string = "";
  password: string = "";


  disabledButton;
  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private accsPrvds: PostProvider,
    public storage: Storage,
    public navCtrl: NavController,
    

  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.disabledButton = 'false';
  }

  async tryLogin() {
     if (this.username == "") {
      this.presentToast('Username Richiesta');
    }
    else if (this.password == "") {
      this.presentToast('Password Obbligatoria');
    }
    else {
      this.disabledButton = true;
      const loader = await this.loadingCtrl.create({
        message: "Attendi per favore",
      });

      loader.present();
      return new Promise(resolve => {
        let body = {
          aksi: 'login',
          username: this.username,
          password: this.password

        }

        this.accsPrvds.postData(body, '/file_aksi.php').subscribe((res: any) => {

          if (res.success == true) {
            loader.dismiss();
            this.disabledButton = false;
            this.presentToast('Login Effettuato');
            this.storage.set('storage_xxx',res.result); //create storage Session
            this.navCtrl.navigateRoot(['/folder/Home']);
          }
          else {
            this.disabledButton = false;
            loader.dismiss();
            this.presentToast('Username o Password Errata');
          }


        });
      });

    }

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
