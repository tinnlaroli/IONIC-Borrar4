import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mesa1Page } from './mesa-1.page';

const routes: Routes = [
  {
    path: '',
    component: Mesa1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mesa1PageRoutingModule {}
