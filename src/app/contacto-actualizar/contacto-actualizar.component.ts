import { Component, OnInit } from '@angular/core';
import { ContactoService } from '../contacto.service';
import { Contacto } from '../contacto';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactoListaComponent } from '../contacto-lista/contacto-lista.component';

@Component({
  selector: 'app-contacto-actualizar',
  templateUrl: './contacto-actualizar.component.html',
  styleUrls: ['./contacto-actualizar.component.css']
})
export class ContactoActualizarComponent implements OnInit {

  id: string;
  contacto: Contacto = new Contacto();

  constructor(private contactoServicio: ContactoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.contactoServicio.buscarContactoPorId(this.id).subscribe(data => {
      this.contacto = data;
    }, error => console.log(error));
  }

  volverLista(){
    this.router.navigate(["contactos"]);
  }


  onSubmit(){
    this.contactoServicio.actualizarContacto(this.id, this.contacto).subscribe(data => {
      this.volverLista();
    }, error => console.log(error));
  }

}
