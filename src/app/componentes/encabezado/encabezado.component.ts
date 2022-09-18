import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  
  titulo: string = "Front End #YoProgramo 2022 - ";
  fecha: string = "";
  hora: string = "";
  logx: string = "Login"; // boton para logear y habilitar edicion
  cambioSegundos: boolean = true;
  BKSegundos: number = -1; // memoriza segundo actual 
  edicionHabilitada: boolean = false;

  constructor() { 
  }

  ngOnInit(): void {
    this.fecha = this.ObtieneFecha();
    this.hora = this.ObtieneHora();
    setInterval(() => this.tick(), 300); // tick cada 300 mSegundos
  }

  cambiaLogin(): void {
    this.edicionHabilitada = !this.edicionHabilitada;
    
    this.logx = this.edicionHabilitada ? "Login" : "Logout";

  } //   private cambiaLogin(): void {

  private tick(): void {
    let fechaDate: Date = new Date();
    let segundos: number = fechaDate.getSeconds();

    if(this.BKSegundos != segundos) {
      this.BKSegundos = segundos;
      this.fecha = this.ObtieneFecha();
      this.hora = this.ObtieneHora();
    }
  } // funcion tick llamada cada 300 mSeg.

  private ObtieneFecha(): string { // funcion para cargar fecha
    let fechaDate: Date = new Date();
    let semana: string[] = ["Domingo", "Lunes", "Martes", "Miercoles", 
                            "Jueves", "Viernes", "Sabado"];
    let mes: string[] = ["Enero", "Febrero", "Marzo", "Abril",
                          "Mayo", "Junio", "Julio", "Agosto",
                          "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    let dia = semana[fechaDate.getDay()];                        
    dia += " " + fechaDate.getDate();
    dia += " de " + mes[fechaDate.getMonth()]; 
    dia += " de " + fechaDate.getUTCFullYear();
    return dia;
  } // function ObtieneFechaHora()
  
  private ObtieneHora(): string { // funcion para retornar la hora
    let fechaDate: Date = new Date();
    let hora: number = fechaDate.getHours();
    let minutos: number = fechaDate.getMinutes();
    let segundos: number = fechaDate.getSeconds();
  
    let segundosS: string = String(segundos);
    segundosS = ("0" + segundos).slice(-2); // muestra siempre 2 digitos
    
    let minutosS: string = String(minutos); // muestra siempre 2 digitos
    minutosS = ("0" + minutos).slice(-2);
  
    return hora + ":" + minutosS + ":" + segundosS;
  } // function ObtieneHora()
}
