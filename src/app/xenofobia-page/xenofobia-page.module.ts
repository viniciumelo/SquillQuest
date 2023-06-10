import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { XenofobiaPagePageRoutingModule } from './xenofobia-page-routing.module';

import { XenofobiaPagePage } from './xenofobia-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    XenofobiaPagePageRoutingModule
  ],
  declarations: [XenofobiaPagePage]
})
export class XenofobiaPagePageModule {}
