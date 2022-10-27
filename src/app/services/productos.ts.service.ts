import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs';
import { Producto } from '../models/Producto';
import { fechas } from '../models/fechas';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  //Api
  //API_URI = 'http://10.0.1.49:3000/api'
  API_URI = 'http://10.0.1.49:3000/';

  constructor(private http: HttpClient) { }


  getProductos(){
   return this.http.get(`${this.API_URI}/productos`);
   }

   getProducto(id: string){
    return this.http.get(`${this.API_URI}/productos/${id}`);
   }

   deleteProductos(id: string){
    return this.http.delete(`${this.API_URI}/productos/${id}`);
   }

   //Necesito un juego de tipo juego
   saveProductos(producto: Producto){
    return this.http.post(`${this.API_URI}/productos`,producto);
   }

   updateProductos(id: string|number,updateProducto: Producto){
    return this.http.put(`${this.API_URI}/productos/${id}`, updateProducto);
   }

   getporFechas(fecha : fechas){
    return this.http.post(`${this.API_URI}/productos/buscar/uno`,fecha);
  }
}
