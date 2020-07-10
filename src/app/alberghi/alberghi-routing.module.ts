import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlberghiPage } from './alberghi.page';

const routes: Routes = [
  {
    path: '',
    component: AlberghiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlberghiPageRoutingModule {}
