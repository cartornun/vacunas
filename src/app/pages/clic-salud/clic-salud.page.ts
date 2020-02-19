import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:import-spacing
import {DeseosService} from '../../services/deseos.service';
import {Lista} from '../../models/lista.model';
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-clic-salud',
  templateUrl: './clic-salud.page.html',
  styleUrls: ['./clic-salud.page.scss'],
})
export class ClicSaludPage implements OnInit {

  // tslint:disable-next-line:no-shadowed-variable
  listas: Lista[] = [];
  constructor(public deseosService: DeseosService,
              private router: Router,
              private alertCtrl: AlertController) {
  }
async agregarLista() {
 // this.router.navigateByUrl('/agregar');
  const alert = await this.alertCtrl.create({
    header: 'Nueva Lista',
    inputs: [
      {
        name: 'titulo',
        type: 'text',
        placeholder: 'Nombre de la lista'
      }
    ],
    buttons: [{
      text: 'Cancelar',
      role: 'cancel',
      handler: () => { console.log('Cancelar');
    }
    },
  {
    text: 'Crear',
    handler: (data) => {
      console.log(data);
      if (data.titulo.length === 0) {
        return;
      }
      const listaId  = this.deseosService.crearLista(data.titulo);

      this.router.navigateByUrl(`/clic-salud/agregar/${listaId}`);
    }
  }
  ]
  });

  alert.present();
}
  ngOnInit() {
  }

}
