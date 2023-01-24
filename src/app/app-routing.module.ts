import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { ClientesComponent } from './clientes/clientes.component';
import { Error404Component } from './error404/error404.component';
import { InicioComponent } from './inicio/inicio.component';
import { TrabajadoresComponent } from './trabajadores/trabajadores.component';

const routes: Routes = [
  {path:"",component:InicioComponent},
  {path:"trabajadores",component:TrabajadoresComponent},
  {path:"clientes",component:ClientesComponent},
  {path:"clientes/:id",component:ClienteComponent},
    //las rutas se definen con {path:"ruta/:id",component:MiComponenteComponent}
  {path:"**",component:Error404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
