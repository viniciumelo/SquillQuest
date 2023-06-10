import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { XenofobiaPagePage } from './xenofobia-page.page';

const routes: Routes = [
  {
    path: '',
    component: XenofobiaPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class XenofobiaPagePageRoutingModule {}
