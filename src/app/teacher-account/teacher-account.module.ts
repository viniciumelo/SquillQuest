import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeacherAccountPageRoutingModule } from './teacher-account-routing.module';

import { TeacherAccountPage } from './teacher-account.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeacherAccountPageRoutingModule
  ],
  declarations: [TeacherAccountPage]
})
export class TeacherAccountPageModule {}
