import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
  },
  {
  path: 'menu',
  loadChildren: () => import('./pages/menu/menu.module').then( m =>
 m.MenuPageModule)
  },
 {
 path: 'authentification',
 loadChildren: () => import('./pages/authentification/authentification.module').then(
 m => m.AuthentificationPageModule)
 },
 {
 path: 'inscription',
 loadChildren: () => import('./pages/inscription/inscription.module').then( m =>
 m.InscriptionPageModule)
 },
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then( m => m.PagesPageModule)
  },
  {
    path: 'endroit-nouveau',
    loadChildren: () => import('./pages/endroit-nouveau/endroit-nouveau.module').then(m => m.EndroitNouveauPageModule)
  },
  
 ];
 @NgModule({
  imports: [
  RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
 })
 export class AppRoutingModule { }