import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactoListaComponent } from './contacto-lista/contacto-lista.component';
import { ContactoCrearComponent } from './contacto-crear/contacto-crear.component';
import { FormsModule } from '@angular/forms';
import { ContactoActualizarComponent } from './contacto-actualizar/contacto-actualizar.component';
import { ContactaVistaComponent } from './contacta-vista/contacta-vista.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactoListaComponent,
    ContactoCrearComponent,
    ContactoActualizarComponent,
    ContactaVistaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
