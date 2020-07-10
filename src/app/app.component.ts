import { Component, OnInit } from '@angular/core';
import { Platform} from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/folder/Home',
      icon: 'home'
    },
    {
      title: 'Alberghi',
      url: '/alberghi/Alberghi',
      icon: 'pin'
    },
    {
      title: 'Ristoranti',
      url: '/ristoranti/Ristoranti',
      icon: 'pin'
    },
    {
      title: 'Attrazioni',
      url: '/attrazioni/Attrazioni',
      icon: 'pin'
    },
  ];

  name: string;
  visible: boolean = false;

 
  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
 
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('/folder')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }


 
}
