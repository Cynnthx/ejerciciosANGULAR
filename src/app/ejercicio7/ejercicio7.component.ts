import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';


@Component({
  selector: 'app-ejercicio7',
  standalone: true,
  imports: [
  FormsModule, CommonModule
  ],
  templateUrl: './ejercicio7.component.html',
  styleUrl: './ejercicio7.component.css'
})
export class Ejercicio7Component {
  numero1: number = 0;
  numero2: number = 0;
  resultado: number | string = 0;

  // Métodos para realizar las operaciones
  sumar() {
    this.resultado = this.numero1 + this.numero2;
  }

  restar() {
    this.resultado = this.numero1 - this.numero2;
  }

  multiplicar() {
    this.resultado = this.numero1 * this.numero2;
  }

  dividir() {
    if (this.numero2 !== 0) {
      this.resultado = this.numero1 / this.numero2;
    } else {
      this.resultado = 'No se puede dividir entre 0';
    }
  }

  raizCuadrada() {
    this.resultado = Math.sqrt(this.numero1);
  }

}
