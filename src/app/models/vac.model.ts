import {VacItem} from './vac-item-model';

export class Lista1 {
    id: number;
    titulo: string;
    nuhsa: string;
    page: number;
    count: number;
    fechaInicio: Date;
    fechaFin: Date;
    estado: [string, string, string, string];
    esExterna: boolean;

    constructor(titulo: string) {
        this.titulo = titulo;
        this.nuhsa = 'nuhsa';
        this.page = 1;
        this.count = 50;
        this.fechaInicio = new Date();
        this.fechaFin = new Date();
        this.estado = ['administrada', 'noAdmContraIndicacion', 'noAdmNegacion', 'Pendiente'];
        this.esExterna = true;

        this.id = new Date().getTime();
    }
}
