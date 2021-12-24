import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesPage } from './pages.page';

const routes: Routes = [
  {
    path: '',
    component: PagesPage
  },
  {
    path: 'endroit-nouveau',
    loadChildren: () => import('./endroit-nouveau/endroit-nouveau.module').then( m => m.EndroitNouveauPageModule)
  },
  {
    path: 'endroit-details',
    loadChildren: () => import('./endroit-details/endroit-details.module').then( m => m.EndroitDetailsPageModule)
  },
  {
    path: 'presentation',
    loadChildren: () => import('./presentation/presentation.module').then( m => m.PresentationPageModule)
  },
  {
    path: 'propose',
    loadChildren: () => import('./propose/propose.module').then( m => m.ProposePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesPageRoutingModule {}
