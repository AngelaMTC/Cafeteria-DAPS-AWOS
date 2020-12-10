import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoriaModel } from '../models/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }
  url = `https://equipo3-4a-2do-parcial-awos.herokuapp.com`;

  obtenerCat(){
    return this.http.get(`${this.url}/categoria`).toPromise();
  }

  registrarCat( usuario: CategoriaModel) {
    return this.http.post(`${this.url}/categoria`, usuario).toPromise();
  }

 actualizarCat(id: string, usuario: CategoriaModel) {
  return this.http.put(`${this.url}/categoria/${id}`, usuario).toPromise();
 }

 eliminarCat(id: string) {
  return this.http.delete(`${this.url}/categoria/${id}`).toPromise();
 }

}
