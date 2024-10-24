import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-ejercicio6',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './ejercicio6.component.html',
  styleUrls: ['./ejercicio6.component.css']  // Asegúrate de que sea styleUrls en plural
})
export class Ejercicio6Component {
  @Input() nombre: string = '';
  @Input() descripcion: string = '';
  @Input() precio: number = 0;
}
