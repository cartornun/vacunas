import { Component, OnInit } from '@angular/core';
import {DeseosService} from '../../services/deseos.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {

  // tslint:disable-next-line:no-shadowed-variable
  constructor(public deseosService: DeseosService) {

  }


}
