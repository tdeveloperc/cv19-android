import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlberghiPageRoutingModule } from './alberghi-routing.module';

import { AlberghiPage } from './alberghi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlberghiPageRoutingModule
  ],
  declarations: [AlberghiPage]
})
export class AlberghiPageModule {}
