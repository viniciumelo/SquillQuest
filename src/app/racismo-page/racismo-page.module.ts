import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RacismoPagePageRoutingModule } from './racismo-page-routing.module';

import { RacismoPagePage } from './racismo-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RacismoPagePageRoutingModule
  ],
  declarations: [RacismoPagePage]
})
export class RacismoPagePageModule {}
