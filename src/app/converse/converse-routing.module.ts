import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConversePage } from './converse.page';

const routes: Routes = [
  {
    path: '',
    component: ConversePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConversePageRoutingModule {}
