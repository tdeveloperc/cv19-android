import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'alberghi/:id',
    loadChildren: () => import('./alberghi/alberghi.module').then( m => m.AlberghiPageModule)
  },
  {
    path: 'ristoranti/:id',
    loadChildren: () => import('./ristoranti/ristoranti.module').then( m => m.RistorantiPageModule)
  },
  {
    path: 'attrazioni/:id',
    loadChildren: () => import('./attrazioni/attrazioni.module').then( m => m.AttrazioniPageModule)
  },
  {
    path: 'accedi/:id',
    loadChildren: () => import('./accedi/accedi.module').then( m => m.AccediPageModule)
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'signup/:id',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'search/:id',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
