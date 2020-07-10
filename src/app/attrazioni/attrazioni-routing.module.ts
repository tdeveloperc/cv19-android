import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttrazioniPage } from './attrazioni.page';

const routes: Routes = [
  {
    path: '',
    component: AttrazioniPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttrazioniPageRoutingModule {}
