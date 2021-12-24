import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EndroitsPage } from './endroits.page';

const routes: Routes = [
  {
    path: '',
    component: EndroitsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EndroitsPageRoutingModule {}
