import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mesa4Page } from './mesa-4.page';

const routes: Routes = [
  {
    path: '',
    component: Mesa4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mesa4PageRoutingModule {}
