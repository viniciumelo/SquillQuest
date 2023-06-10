import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SexismoPagePage } from './sexismo-page.page';

const routes: Routes = [
  {
    path: '',
    component: SexismoPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SexismoPagePageRoutingModule {}
