import { Component } from '@angular/core';
import { country } from '../../interface/pais.interface';
import { PaisService } from '../../services/pais.service';
import { compileDeclareInjectableFromMetadata } from '@angular/compiler';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {

  hayError: boolean = false;
  capital: country[] = [];
  paisesSugeridos: country[] = [];

  termino: string = '';
  mostrarSugerencias:boolean= false; 

  constructor(private paisService: PaisService) { }

  sugerencias(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias= true;

    this.paisService.buscarCapital(termino)
    .subscribe(
      lista=> {this.paisesSugeridos = lista.slice(0,5)},
      err=> {this.paisesSugeridos = [], this.mostrarSugerencias= false}
    );
  }

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias= false;

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

  buscarSugerido(termino:string){
    this.mostrarSugerencias= false;
    this.buscar(termino);
  }



}
