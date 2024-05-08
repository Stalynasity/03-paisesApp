import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { ActivatedRoute } from '@angular/router';
import { country } from '../../interface/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {

  regiones: string[] = ['americas', 'africa', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';

  region: country[] = [];

  constructor(
    private PaisService: PaisService
  ) { }

  activarRegion(region: string) {
    this.regionActiva = region;
    //Todo: hacer el llamado al servicio

    this.PaisService.buscarRegion(region)
      .subscribe(region => {
        this.region = region
      });
  }


}
