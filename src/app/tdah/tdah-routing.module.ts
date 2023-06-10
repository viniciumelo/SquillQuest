import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TDAHPage } from './tdah.page';

const routes: Routes = [
  {
    path: '',
    component: TDAHPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TDAHPageRoutingModule {}
