import { Component } from '@angular/core';
import { country } from '../../interface/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {

  hayError: boolean = false;
  capital: country[] = [];

  termino: string = '';

  constructor(private paisService: PaisService) { }

  sugerencias(termino: string) {
    this.hayError = false;
  }

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarCapital(termino)
      .subscribe(capital => {
        this.capital = capital;
        console.log(capital);
      },
        err => {
        this.hayError = true;
        }
      )

  }


}
