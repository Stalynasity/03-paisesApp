import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { country } from '../../interface/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  termino:string= '';
  hayError: boolean=false;

  paises: country[]= [];
  paisesSugeridos: country[]= [];
  mostrarSugerencias:boolean = false;

  
  constructor(private paisService: PaisService) { }

  buscar(termino: string){
    this.hayError= false;
    this.mostrarSugerencias= false;
    this.termino= termino;

    this.paisService.buscarPais(termino)
    .subscribe(paises=>{
      console.log(paises);
      this.paises= paises;
      
    }, err =>{
      this.hayError =true;
      this.paises   =[]
      console.log('error');
    });
  }

  sugerencias(termino:string){
    //aqui desaparece ya que al escribir regresa a false
    this.hayError=false;
    this.termino= termino;
    this.mostrarSugerencias= true;

    this.paisService.buscarPais(termino)
    .subscribe(
      lista=> this.paisesSugeridos = lista.splice(0,5),
      err=>   this.paisesSugeridos = [] 
      );
  }

}
