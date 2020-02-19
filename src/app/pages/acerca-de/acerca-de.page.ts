import { Component, OnInit } from '@angular/core';
import {DeseosService} from '../../services/deseos.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.page.html',
  styleUrls: ['./acerca-de.page.scss'],
})
export class AcercaDePage implements OnInit {

  // tslint:disable-next-line:no-shadowed-variable
  constructor(public deseosService: DeseosService) { }

  ngOnInit() {
  }

}
