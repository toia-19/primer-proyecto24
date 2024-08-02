import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes LOCALES
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

// Importamos para ACCEDER a todas las rutas de la página
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  // Componentes LOCALES del módulo -> CREADOS POR NOSOTROS
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  // Archivos, componentes de la web o de otro módulo de los que queremos tener acceso
  /*
    Archivo de rutas (para el navegador), componentes de material que vienen desde Internet,
    componentes que vienen desde otro módulo (por ejemplo, una card)
  */
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  // EXPONE los componentes locales para que puedan ser mostrados en el resto de la página
  // EXPONE componentes de la web para poder tener acceso a ellos en el propio módulo
  exports: [
    NavbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
