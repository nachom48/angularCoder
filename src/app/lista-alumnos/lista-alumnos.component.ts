import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {

  constructor() { }
  listaAlumnos : string[]=["Jose Luis","Maria Angeles","Lucas Federico","Agustin Samuel","Carlos Elustiza","Carolina Veraz"]
  ngOnInit(): void {
  }


  borrarElemento(){
    if(this.listaAlumnos.length)
    this.listaAlumnos.shift()
  }
}
