import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClicSaludPage } from './clic-salud.page';

const routes: Routes = [
  {
    path: '',
    component: ClicSaludPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClicSaludPageRoutingModule {}
