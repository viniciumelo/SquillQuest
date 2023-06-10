import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiscriminacaoPagePage } from './discriminacao-page.page';

const routes: Routes = [
  {
    path: '',
    component: DiscriminacaoPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiscriminacaoPagePageRoutingModule {}
