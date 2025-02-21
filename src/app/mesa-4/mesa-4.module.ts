import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mesa4PageRoutingModule } from './mesa-4-routing.module';

import { Mesa4Page } from './mesa-4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mesa4PageRoutingModule
  ],
  declarations: [Mesa4Page]
})
export class Mesa4PageModule {}
