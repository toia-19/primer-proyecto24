import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// RUTA PADRE -> MÓDULO RAÌZ
import { AppRoutingModule } from './app-routing.module';

// ARCHIVO COMPONENT GENERAL
import { AppComponent } from './app.component';

// SOLO IMPORTAMOS COMPONENTES GLOBALES
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
