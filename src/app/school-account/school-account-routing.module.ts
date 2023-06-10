import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchoolAccountPage } from './school-account.page';

const routes: Routes = [
  {
    path: '',
    component: SchoolAccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchoolAccountPageRoutingModule {}
