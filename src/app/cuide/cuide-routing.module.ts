import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuidePage } from './cuide.page';

const routes: Routes = [
  {
    path: '',
    component: CuidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuidePageRoutingModule {}
