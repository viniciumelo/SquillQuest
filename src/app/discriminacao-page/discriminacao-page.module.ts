import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiscriminacaoPagePageRoutingModule } from './discriminacao-page-routing.module';

import { DiscriminacaoPagePage } from './discriminacao-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiscriminacaoPagePageRoutingModule
  ],
  declarations: [DiscriminacaoPagePage]
})
export class DiscriminacaoPagePageModule {}
