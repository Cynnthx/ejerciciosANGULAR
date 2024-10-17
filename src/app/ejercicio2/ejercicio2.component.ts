import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio2',
  standalone: true,
  imports: [],
  templateUrl: './ejercicio2.component.html',
  styleUrl: './ejercicio2.component.css'
})
export class Ejercicio2Component implements OnInit, OnDestroy{

  tiempoAhora: string = '';
  private intervalo: any;
  private detenido: boolean = false;

  constructor() {
    this.generarEjercicio2Init();
  }

  ngOnInit() {
    this.generarEjercicio2Init();
  }

  ngOnDestroy() {
    this.ejercicio2Destroy();
  }

  generarEjercicio2Init() {
    this.actualizarTiempo();
    this.intervalo = setInterval(() => { //actualiza la hora cada segundo
      if (!this.detenido) {
        this.actualizarTiempo(); //actualiza la hora si el reloj no está detenido
      }
    }, 1000);
  }

  actualizarTiempo() {
    const ahora = new Date(); //obtenemos la hora actual
    this.tiempoAhora = ahora.toLocaleTimeString();  //formateamos la hora actual cmo 1 cadena
  }

  detenerReloj() {
    this.detenido = true;
  }

  ejercicio2Destroy() {
    if (this.intervalo) {
      clearInterval(this.intervalo);
    }
  }
}
