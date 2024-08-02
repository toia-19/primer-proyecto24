import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';

const routes: Routes = [
  /*
    Definimos como ruta raíz (primera vista visible al renderizar la página)
    a Inicio Component
  */
  {
    path:"", component: InicioComponent
  },
  /*
    Las cargas perezosas renderizan un módulo completo únicamente cuando queremos acceder a 
    ellos, provocando que nuestra página sea más rápida porque solo cargará los componentes 
    de ESE módulo en específico
  */
  {
    path:"", loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)
  },
  {
    path:"", loadChildren:()=>import('./modules/informacion/informacion.module').then(m=>m.InformacionModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
