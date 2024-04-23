import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';

// VISTA - PÁGINA
import { InicioComponent } from './pages/inicio/inicio.component';

// COMPONENTES LOCALES
import { CardComponent } from './components/card/card.component';

// COMPONENTES DE MATERIAL
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    InicioComponent,
    CardComponent
  ],
  imports: [
    // IMPORTAMOS DESDE LA WEB Y TRAEMOS AL MÓDULO
    CommonModule,
    InicioRoutingModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    // EXPORTAMOS AL RESTO DE LA PÁGINA
    MatButtonModule,
    MatCardModule
  ]
})
export class InicioModule { }
