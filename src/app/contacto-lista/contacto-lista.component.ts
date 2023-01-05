import { Component, OnInit } from '@angular/core';
import { Contacto } from '../contacto';
import { ContactoService } from '../contacto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacto-lista',
  templateUrl: './contacto-lista.component.html',
  styleUrls: ['./contacto-lista.component.css']
})
export class ContactoListaComponent implements OnInit {

  contactos: Contacto[];

  constructor(private contactoServicio: ContactoService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerContactos();
  }

  private obtenerContactos(){
    this.contactoServicio.listarContactos().subscribe(data => {
      this.contactos = data;
    });
  }

  actualizarContacto(id: string){
    this.router.navigate(["actualizar-contacto", id]);
  }

  eliminarContacto(id: string) {
    this.contactoServicio.eliminarContacto(id).subscribe( data => {
      console.log(data);
      this.obtenerContactos();
    })
  }

  verContacto(id: String){
    this.router.navigate(["detalles", id]);
  }

}
