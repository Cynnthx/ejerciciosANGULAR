import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio2',
  standalone: true,
  imports: [],
  templateUrl: './ejercicio2.component.html',
  styleUrls: ['./ejercicio2.component.css']
})
export class Ejercicio2Component implements OnInit, OnDestroy {
  tiempoAhora: string = '';
  private intervalo: any;
  private detenido: boolean = false;

  ngOnInit() {
    this.generarEjercicio2Init();
  }

  ngOnDestroy() {
    this.ejercicio2Destroy();
  }

  generarEjercicio2Init() {
    this.actualizarTiempo();
    this.intervalo = setInterval(() => {
      if (!this.detenido) {
        this.actualizarTiempo();
      }
    }, 1000);
  }

  actualizarTiempo() {
    const ahora = new Date();
    this.tiempoAhora = ahora.toLocaleTimeString();
  }

  detenerReloj() {
    this.detenido = true;
  }

  actualizarReloj() {
    this.detenido = false;
    this.actualizarTiempo();
  }

  ejercicio2Destroy() {
    if (this.intervalo) {
      clearInterval(this.intervalo);
    }
  }
}
