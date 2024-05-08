import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';

const routes: Routes = [
  // ruta por defecto en la inicialización  
  {
    path:"",component:InicioComponent
  },
  // CARGA PEREZOSA
  // ruta que nos vincula al módulo de Inicio y todo su contenido
  // loadChildren: Indica que habrá una ruta hija
  // .then: Función asincronica tipo PROMESA
  {
    path:"",loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)
  },
  {
    path:"",loadChildren:()=>import('./modules/producto/producto.module').then(m=>m.ProductoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
