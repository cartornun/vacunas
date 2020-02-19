import { Component, OnInit } from '@angular/core';
import {DeseosService} from '../../services/deseos.service';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.page.html',
  styleUrls: ['./tutorial.page.scss'],
})
export class TutorialPage implements OnInit {

  // tslint:disable-next-line:no-shadowed-variable
  constructor(public deseosService: DeseosService) { }

  ngOnInit() {
  }

}
