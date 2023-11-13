import { Component, OnInit } from '@angular/core';
import { alumno } from '../alumno.model';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss'],
})
export class ListaAlumnosComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  
  nuevoAlumno: alumno = {nombre:'', asistencia: false};
  alumnos : any =[];

   
  agregarAlumno(){
    this.alumnos.push(this.nuevoAlumno);
    this.nuevoAlumno = {nombre:'', asistencia: false};
  }

}

