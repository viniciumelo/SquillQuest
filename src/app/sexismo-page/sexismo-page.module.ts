import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SexismoPagePageRoutingModule } from './sexismo-page-routing.module';

import { SexismoPagePage } from './sexismo-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SexismoPagePageRoutingModule
  ],
  declarations: [SexismoPagePage]
})
export class SexismoPagePageModule {}
