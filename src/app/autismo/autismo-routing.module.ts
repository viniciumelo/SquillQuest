import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutismoPage } from './autismo.page';

const routes: Routes = [
  {
    path: '',
    component: AutismoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutismoPageRoutingModule {}
