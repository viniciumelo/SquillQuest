import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TODPage } from './tod.page';

const routes: Routes = [
  {
    path: '',
    component: TODPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TODPageRoutingModule {}
