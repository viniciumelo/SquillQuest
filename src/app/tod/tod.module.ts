import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TODPageRoutingModule } from './tod-routing.module';

import { TODPage } from './tod.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TODPageRoutingModule
  ],
  declarations: [TODPage]
})
export class TODPageModule {}
