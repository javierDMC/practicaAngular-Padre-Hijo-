import { Component } from '@angular/core';
import { Trabajador } from '../Modelos/trabajador';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
  cliente!:Trabajador;

constructor(private rutaActiva:ActivatedRoute){}

ngOnInit(){
  let dato= this.rutaActiva.snapshot.params["id"];
  alert("Nos han pasado: " + dato)
}
}
