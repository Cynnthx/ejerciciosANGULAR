import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-ejercicio3',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ejercicio3.component.html',
  styleUrl: './ejercicio3.component.css'
})
export class Ejercicio3Component {

  nuevaTarea: string = '';
  tareas: string[] = [];  //array para almacenar las tareas

  constructor() {
    this.generarEjercicio3();
  }

  generarEjercicio3(){
    if (this.nuevaTarea.trim()){
      this.tareas.push(this.nuevaTarea.trim()) //agregamos la nueva tarea al array
      this.nuevaTarea = ''; //limpiamos el campo de entrada
    }
  }
}
