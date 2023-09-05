import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from "rxjs/operators";
import { country } from '../../interface/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
  export class VerPaisComponent implements OnInit{

  pais!: country[];

  constructor(
    private activatedRoute:ActivatedRoute,
    private PaisService:PaisService
    ) { }
    

    // Object=['ara'];

  ngOnInit(): void {

    //Busqueda de la id de la url
    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.PaisService.getPaisAlpha(id) )
    )
    .subscribe(pais => 
      {
        this.pais = pais
      });

    
    //2do metodo
    // this.activatedRoute.params
    //   .subscribe( ({id}) => {
    //     console.log( id );

    //     this.PaisService.getPaisAlpha(id)
    //     .subscribe(pais=>{
    //       console.log(pais);
    //     });
    //   });
  }

}
