import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../../home/home.module').then(m =>
          m.HomePageModule)
      },
      {
        path: 'movies',
        loadChildren: () => import('../movies/movies.module').then( m =>
       m.MoviesPageModule)
        },
      
      {
        path: 'endroits',
        loadChildren: () => import('../endroits/endroits.module').then(m =>
          m.EndroitsPageModule)
      },
      
      {
        path: 'contacts',
        loadChildren: () => import('../contacts/contacts.module').then(m =>
          m.ContactsPageModule)
      },
      {
        path:'endroit-nouveau',
        loadChildren: () => import('../endroit-nouveau/endroit-nouveau.module').then(m => m.EndroitNouveauPageModule)
      },
      {
        path: 'endroit-details',
        loadChildren: () => import('../endroit-details/endroit-details.module').then( m =>
        m.EndroitDetailsPageModule)
        },
        {
          path:'presentation',
          loadChildren: () => import('../presentation/presentation.module').then(m => m.PresentationPageModule)
        },
        {
          path:'propose',
          loadChildren: () => import('../propose/propose.module').then(m => m.ProposePageModule)
        },
        
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule { }
