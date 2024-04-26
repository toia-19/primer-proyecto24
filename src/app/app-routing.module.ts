import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';

const routes: Routes = [
  // Ruta común -> componente
  {
    path:"",component:InicioComponent
  },
  // Carga PEREZOSA -> ruta que te lleva a un módulo específico
  // loadChildren: indica que habrá una ruta hija
  // ()=> import: función flecha que importa desde la ruta
  // .then: Función asíncronica del tipo PROMESA
  {
    path:"",loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
