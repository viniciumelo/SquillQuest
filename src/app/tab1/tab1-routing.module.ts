import { NgModule } from '@angular/core';
<<<<<<< Updated upstream:src/app/tab1/tab1-routing.module.ts
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
=======
import { Routes, RouterModule } from '@angular/router';

import { ManualPage } from './manual.page';
>>>>>>> Stashed changes:src/app/manual/manual-routing.module.ts

const routes: Routes = [
  {
    path: '',
    component: ManualPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManualPageRoutingModule {}
