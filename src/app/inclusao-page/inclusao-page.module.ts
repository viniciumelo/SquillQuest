import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InclusaoPagePageRoutingModule } from './inclusao-page-routing.module';

import { InclusaoPagePage } from './inclusao-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InclusaoPagePageRoutingModule
  ],
  declarations: [InclusaoPagePage]
})
export class InclusaoPagePageModule {}
