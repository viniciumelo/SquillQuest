import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RacismoPagePage } from './racismo-page.page';

const routes: Routes = [
  {
    path: '',
    component: RacismoPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RacismoPagePageRoutingModule {}
