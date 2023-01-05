import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoListaComponent } from './contacto-lista/contacto-lista.component';
import { ContactoCrearComponent } from './contacto-crear/contacto-crear.component';
import { ContactoActualizarComponent } from './contacto-actualizar/contacto-actualizar.component';
import { ContactaVistaComponent } from './contacta-vista/contacta-vista.component';

const routes: Routes = [
  {path: "contactos", component: ContactoListaComponent},
  {path: "crear-contacto", component: ContactoCrearComponent},
  {path: "", redirectTo: "contactos", pathMatch: "full"},
  {path: "actualizar-contacto/:id", component: ContactoActualizarComponent},
  {path: "detalles/:id", component: ContactaVistaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
