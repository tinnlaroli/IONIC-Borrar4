import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mesa1PageRoutingModule } from './mesa-1-routing.module';

import { Mesa1Page } from './mesa-1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mesa1PageRoutingModule
  ],
  declarations: [Mesa1Page]
})
export class Mesa1PageModule {}
