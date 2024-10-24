import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio5',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ejercicio5.component.html',
  styleUrls: ['./ejercicio5.component.css']
})
export class Ejercicio5Component {
  comentario: string = ''; // Variable para almacenar el comentario
  comentarios: string[] = []; // Array para almacenar los comentarios

  enviarComentario() {
    if (this.comentario.trim() !== '') {
      this.comentarios.push(this.comentario); // Agrega el comentario al array
      this.comentario = ''; // Limpia el comentario
    }
  }
}
