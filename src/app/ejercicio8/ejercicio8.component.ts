import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

interface articulo {
  nombre: string;
  precio: number;
  cantidad: number;
}
@Component({
  selector: 'app-ejercicio8',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ejercicio8.component.html',
  styleUrl: './ejercicio8.component.css'
})
export class Ejercicio8Component {
  articulos: articulo[] = [
    { nombre: 'Maracuyá', precio: 1.0, cantidad: 0 },
    { nombre: 'Cereales', precio: 1.5, cantidad: 0 },
    { nombre: 'Leche', precio: 1.2, cantidad: 0 },
    { nombre: 'Arroz', precio: 0.8, cantidad: 0 }
  ];

  totalCompra: number = 0;

  incrementarCantidad(articulo: articulo) {
    articulo.cantidad++;
    this.calcularTotal();
  }

  disminuirCantidad(articulo: articulo) {
    if (articulo.cantidad > 0) {
      articulo.cantidad--;
      this.calcularTotal();
    }
  }

  calcularTotal() {
    this.totalCompra = this.articulos.reduce((total, articulo) => {
      return total + (articulo.precio * articulo.cantidad);
    }, 0);
  }
}
