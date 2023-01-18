import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Trabajador } from '../Modelos/trabajador';

@Component({
  selector: 'app-card-trabajador',
  templateUrl: './card-trabajador.component.html',
  styleUrls: ['./card-trabajador.component.css']
})
export class CardTrabajadorComponent {
  @Input() trabajador!:Trabajador;
  @Output() eventoBorrar = new EventEmitter<number>();
  @Output() eventoLike = new EventEmitter<number>();
  @Output() eventoUnlike = new EventEmitter<number>();

  borrarTrabajador(id:number){
    alert("Quieres borrar a " + id);
    this.eventoBorrar.emit(id);
  }

  likeTrabajador(id:number){
    this.eventoLike.emit(id);

  }

  unlikeTrabajador(id:number){
    this.eventoUnlike.emit(id);
  }


}


