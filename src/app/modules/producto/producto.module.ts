import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ARCHIVO DE RUTAS DEL MÓDULO PRODUCTO
import { ProductoRoutingModule } from './producto-routing.module';

// VISTAS DE SECCIONES DE PRODUCTOS
import { ProductoComponent } from './pages/producto/producto.component';
import { AlimentacionComponent } from './pages/alimentacion/alimentacion.component';
import { JugueteComponent } from './pages/juguete/juguete.component';
import { IndumentariaComponent } from './pages/indumentaria/indumentaria.component';


@NgModule({
  declarations: [
    ProductoComponent,
    AlimentacionComponent,
    JugueteComponent,
    IndumentariaComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ],
  exports: [
    ProductoComponent,
    AlimentacionComponent,
    JugueteComponent,
    IndumentariaComponent
  ]
})
export class ProductoModule { }
