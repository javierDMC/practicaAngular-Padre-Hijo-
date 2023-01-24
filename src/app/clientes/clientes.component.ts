import { Component } from '@angular/core';
import { Trabajador } from '../Modelos/trabajador';
import { TrabajadorService } from '../Servicios/trabajador.service';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {

  //declaramos una variable para trabajar con ella
  //con el ! podemos inicializar la variable vacia
  clientes!:Array<Trabajador>

  //inyectamos el componente en el constructor
  constructor(private servicioTrabajadores:TrabajadorService){}

  ngOnInit(){
    this.clientes=this.servicioTrabajadores.getTrabajadores();
  }


}
