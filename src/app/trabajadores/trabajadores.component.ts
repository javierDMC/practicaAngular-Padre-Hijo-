import { Component } from '@angular/core';
import { Trabajador } from '../Modelos/trabajador';
import { TrabajadorService } from '../Servicios/trabajador.service';

@Component({
  selector: 'app-trabajadores',
  templateUrl: './trabajadores.component.html',
  styleUrls: ['./trabajadores.component.css']
})
export class TrabajadoresComponent {

  trabajadores:Trabajador[]=[]

  constructor(private servicioTrabajadores:TrabajadorService){}

  ngOnInit(){
    this.trabajadores=this.servicioTrabajadores.getTrabajadores();
  }

  like(id:number){
    this.servicioTrabajadores.sumaVotos(id);
  }

  unlike(id:number){
    this.servicioTrabajadores.restaVotos(id);
  }

  borrar(id:number){
    this.servicioTrabajadores.borrar(id);
  }
}
