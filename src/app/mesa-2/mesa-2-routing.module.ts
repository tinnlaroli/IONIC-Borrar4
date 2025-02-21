import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mesa2Page } from './mesa-2.page';

const routes: Routes = [
  {
    path: '',
    component: Mesa2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mesa2PageRoutingModule {}
