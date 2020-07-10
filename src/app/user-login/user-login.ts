import { Component } from '@angular/core';
import {  NavController, NavParams } from '@ionic/angular';



@Component({
  selector: 'page-user-login',
  templateUrl: 'user-login.html',
})
export class UserLogin {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserLogin');
  }


}
