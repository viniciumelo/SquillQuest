import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchoolAccountPageRoutingModule } from './school-account-routing.module';

import { SchoolAccountPage } from './school-account.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchoolAccountPageRoutingModule
  ],
  declarations: [SchoolAccountPage]
})
export class SchoolAccountPageModule {}
