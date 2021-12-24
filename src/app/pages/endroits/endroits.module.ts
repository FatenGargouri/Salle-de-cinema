import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EndroitsPageRoutingModule } from './endroits-routing.module';

import { EndroitsPage } from './endroits.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EndroitsPageRoutingModule
  ],
  declarations: [EndroitsPage]
})
export class EndroitsPageModule {}
