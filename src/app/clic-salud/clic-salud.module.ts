import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClicSaludPageRoutingModule } from './clic-salud-routing.module';

import { ClicSaludPage } from './clic-salud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClicSaludPageRoutingModule
  ],
  declarations: [ClicSaludPage]
})
export class ClicSaludPageModule {}
