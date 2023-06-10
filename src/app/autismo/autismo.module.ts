import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutismoPageRoutingModule } from './autismo-routing.module';

import { AutismoPage } from './autismo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutismoPageRoutingModule
  ],
  declarations: [AutismoPage]
})
export class AutismoPageModule {}
