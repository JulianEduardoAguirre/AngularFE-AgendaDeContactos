import { Component, OnInit } from '@angular/core';
import { Contacto } from '../contacto';
import { ContactoService } from '../contacto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacto-crear',
  templateUrl: './contacto-crear.component.html',
  styleUrls: ['./contacto-crear.component.css']
})
export class ContactoCrearComponent implements OnInit {

  contacto: Contacto = new Contacto();

  constructor(private contactoServicio: ContactoService, private router: Router) { }

  ngOnInit(): void {
  }

  guardarContacto(){
    this.contactoServicio.crearContacto(this.contacto).subscribe( data => {
      console.log(data);
      this.volverLista();
    }, error => console.log(error));
  }

  volverLista(){
    this.router.navigate(["contactos"]);
  }


  onSubmit(){
    this.guardarContacto();
  }

}
