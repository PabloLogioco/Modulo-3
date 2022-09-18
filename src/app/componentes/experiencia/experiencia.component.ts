import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  listaExperiencia:any;

  constructor(private datosPorfolio:PorfolioService) {
  }

  ngOnInit(): void {
    this.datosPorfolio.ObtenerDatos().subscribe(data => {
      // console.log(data);
      this.listaExperiencia = data.experiencia;
    });
  }
}
//