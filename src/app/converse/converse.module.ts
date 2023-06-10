import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConversePageRoutingModule } from './converse-routing.module';

import { ConversePage } from './converse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConversePageRoutingModule
  ],
  declarations: [ConversePage]
})
export class ConversePageModule {}
