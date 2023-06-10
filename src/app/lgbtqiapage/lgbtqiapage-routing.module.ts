import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LGBTQIAPagePage } from './lgbtqiapage.page';

const routes: Routes = [
  {
    path: '',
    component: LGBTQIAPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LGBTQIAPagePageRoutingModule {}
