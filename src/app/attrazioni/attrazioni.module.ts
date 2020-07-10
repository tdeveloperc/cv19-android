import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttrazioniPageRoutingModule } from './attrazioni-routing.module';

import { AttrazioniPage } from './attrazioni.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AttrazioniPageRoutingModule
  ],
  declarations: [AttrazioniPage]
})
export class AttrazioniPageModule {}
