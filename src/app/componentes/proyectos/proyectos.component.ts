import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  listaProyectos:any;

  constructor(private datosPorfolio:PorfolioService) {
  }

  ngOnInit(): void {
    this.datosPorfolio.ObtenerDatos().subscribe(data => {
      // console.log(data);
      this.listaProyectos = data.proyectos;
    });
  }
}
