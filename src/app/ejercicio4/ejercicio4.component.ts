import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-ejercicio4',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercicio4.component.html',
  styleUrl: './ejercicio4.component.css'
})
export class Ejercicio4Component {

  tiempo: number = 0;
  tiempoRestante: number = 0;
  intervalo: any;

  iniciarTemporizador(){
    this.tiempoRestante = this.tiempo;
    this.intervalo = setInterval(() => {
      if (this.tiempoRestante > 0) {
        this.tiempoRestante--;
      } else {
        this.detenerTemporizador();
      }
    }, 1000); //1000 milisegundos = 1 segundo, se ejecuta una vez por segundo.
  }

  detenerTemporizador(){
    clearInterval(this.intervalo);
  }

}
