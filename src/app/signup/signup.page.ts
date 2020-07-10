import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController, LoadingController, AlertController } from '@ionic/angular';
import { PostProvider } from '../providers/post-provider';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  nome: string = "";
  cognome: string = "";
  username: string = "";
  email: string = "";
  password: string = "";
  flag: boolean = true;
  tmp: number;

  disabledButton;
  constructor(
    private router: Router,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private accsPrvds: PostProvider

  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.disabledButton = 'false';
  }

  async tryRegister() {
    if (this.nome == "") {
      this.presentToast('Nome Richiesto');
    }
    else if (this.cognome == "") {
      this.presentToast('Cognome Richiesto');
    }
    else if (this.username == "") {
      this.presentToast('Username Richiesta');
    }
    else if (this.email == "") {
      this.presentToast('Email Richiesta');
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

      console.log('Nome: ' + this.flag);
      if(this.flag == true){
        this.tmp = 1;
      }
      else{
        this.tmp = 0;
      }
      return new Promise(resolve => {
        let body = {
          aksi: 'add_register',
          nome: this.nome,
          cognome: this.cognome,
          username: this.username,
          email: this.email,
          password: this.password,
          flag: this.tmp

        }

        this.accsPrvds.postData(body, '/file_aksi.php').subscribe((res: any) => {

          if (res.success == true) {
            loader.dismiss();
            this.disabledButton = false;
            this.presentToast(res.msg);
            this.router.navigate(['/accedi/Login']);
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
      position: 'top'
    });

    toast.present();
  }


}