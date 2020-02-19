import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AgregarPage} from '../agregar/agregar.page';

import { ClicSaludPage } from './clic-salud.page';

// @ts-ignore
const routes: Routes = [
  {
    path: '',
    component: ClicSaludPage,
    children: [
      {
        path: 'agregar',
        loadChildren: '../agregar/agregar.module#AgregarPageModule'
      }
    ]
  },
  {
    path: 'agregar',
    loadChildren: () => import('../agregar/agregar.module').then( m => m.AgregarPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClicSaludPageRoutingModule {}
