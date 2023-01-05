import { Component, OnInit } from '@angular/core';
import { Contacto } from '../contacto';
import { ActivatedRoute } from '@angular/router';
import { ContactoService } from '../contacto.service';

@Component({
  selector: 'app-contacta-vista',
  templateUrl: './contacta-vista.component.html',
  styleUrls: ['./contacta-vista.component.css']
})
export class ContactaVistaComponent implements OnInit {

  id: String;
  contacto : Contacto;

  constructor(private route: ActivatedRoute,
    private contactoServicio: ContactoService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];


    this.contacto = new Contacto();
    this.contactoServicio.buscarContactoPorId(this.id).subscribe( data => {
      this.contacto = data;
    });
  }

}
