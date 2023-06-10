import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TDAHPageRoutingModule } from './tdah-routing.module';

import { TDAHPage } from './tdah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TDAHPageRoutingModule
  ],
  declarations: [TDAHPage]
})
export class TDAHPageModule {}
