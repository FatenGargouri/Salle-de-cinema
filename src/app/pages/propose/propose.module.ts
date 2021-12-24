import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProposePageRoutingModule } from './propose-routing.module';

import { ProposePage } from './propose.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProposePageRoutingModule
  ],
  declarations: [ProposePage]
})
export class ProposePageModule {}
