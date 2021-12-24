import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EndroitNouveauPage } from './endroit-nouveau.page';

const routes: Routes = [
  {
    path: '',
    component: EndroitNouveauPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EndroitNouveauPageRoutingModule {}
