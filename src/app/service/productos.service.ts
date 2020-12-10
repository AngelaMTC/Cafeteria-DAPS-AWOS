import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductosModel } from '../models/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }
  url = `https://equipo3-4a-2do-parcial-awos.herokuapp.com`;

  obtenerPro(){
    return this.http.get(`${this.url}/producto`).toPromise();
  }

  registarPro( usuario: ProductosModel) {
    return this.http.post(`${this.url}/producto`, usuario).toPromise();
  }

 actualizarPro(id: string, usuario: ProductosModel) {
  return this.http.put(`${this.url}/producto/${id}`, usuario).toPromise();
 }

 eliminarPro(id: string) {
  return this.http.delete(`${this.url}/producto/${id}`).toPromise();
 }

}
