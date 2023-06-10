import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuidePageRoutingModule } from './cuide-routing.module';

import { CuidePage } from './cuide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuidePageRoutingModule
  ],
  declarations: [CuidePage]
})
export class CuidePageModule {}
