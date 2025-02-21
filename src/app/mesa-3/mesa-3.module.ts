import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mesa3PageRoutingModule } from './mesa-3-routing.module';

import { Mesa3Page } from './mesa-3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mesa3PageRoutingModule
  ],
  declarations: [Mesa3Page]
})
export class Mesa3PageModule {}
