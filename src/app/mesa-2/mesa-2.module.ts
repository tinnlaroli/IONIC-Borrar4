import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mesa2PageRoutingModule } from './mesa-2-routing.module';

import { Mesa2Page } from './mesa-2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mesa2PageRoutingModule
  ],
  declarations: [Mesa2Page]
})
export class Mesa2PageModule {}
