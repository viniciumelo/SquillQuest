import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
<<<<<<< Updated upstream:src/app/tab1/tab1.module.ts
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
=======

import { IonicModule } from '@ionic/angular';

import { ManualPageRoutingModule } from './manual-routing.module';

import { ManualPage } from './manual.page';
>>>>>>> Stashed changes:src/app/manual/manual.module.ts

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManualPageRoutingModule
  ],
  declarations: [ManualPage]
})
export class ManualPageModule {}
