import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LGBTQIAPagePageRoutingModule } from './lgbtqiapage-routing.module';

import { LGBTQIAPagePage } from './lgbtqiapage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LGBTQIAPagePageRoutingModule
  ],
  declarations: [LGBTQIAPagePage]
})
export class LGBTQIAPagePageModule {}
