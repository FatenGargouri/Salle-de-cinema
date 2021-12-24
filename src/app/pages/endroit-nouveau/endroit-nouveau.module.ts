import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EndroitNouveauPageRoutingModule } from './endroit-nouveau-routing.module';

import { EndroitNouveauPage } from './endroit-nouveau.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EndroitNouveauPageRoutingModule
  ],
  declarations: [EndroitNouveauPage]
})
export class EndroitNouveauPageModule {}
