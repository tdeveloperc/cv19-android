import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'here-map',
    templateUrl: 'here-map.component.html'
})

export class HereMapComponent implements OnInit {
  text:string;
    public constructor() {  }

    public ngOnInit() {
      
      this.text ='xiao'; 
      console.log('entrato');
    
    }
  
}