import { Component } from '@angular/core';

@Component({
  selector: 'app-prueba',
  standalone: true,
  imports: [],
  templateUrl: './prueba.component.html',
  styleUrl: './prueba.component.css'
})
export class PruebaComponent {
  prueba: string = '';

  constructor() {
    this.generarPrueba();
  }

  generarPrueba() {
    const hora = new Date().getHours();
    if (hora < 12){
      this.prueba = 'Buenos días';

    }else if (hora < 20) {
      this.prueba = 'Buenas tardes';
    }else{
      this.prueba = 'Buenas noches';
    }
  }
}
