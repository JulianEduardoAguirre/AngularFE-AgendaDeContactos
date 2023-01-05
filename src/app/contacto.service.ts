import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contacto } from './contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  private baseURL = "http://localhost:8080/api/v1";

  constructor(private httpClient: HttpClient) { }

  listarContactos(): Observable<Contacto[]>{
    return this.httpClient.get<Contacto[]>(`${this.baseURL}` + "/contactos");
  }

  crearContacto(contacto: Contacto): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}` + "/contactos", contacto);
  }

  buscarContactoPorId(id: String): Observable<Contacto>{
    return this.httpClient.get<Contacto>(`${this.baseURL}` + "/contactos/" + `${id}`)
  }

  actualizarContacto(id: String, contacto: Contacto): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}` + "/contactos/" + `${id}`, contacto);
  }

  eliminarContacto(id: String): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}` + "/contactos/" + `${id}`);

  }
}
