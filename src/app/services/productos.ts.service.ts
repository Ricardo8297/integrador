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
  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }


  getProductos(){
    return this.http.get('/api/productos');
    }
 
    getProducto(id: string){
     return this.http.get(`/api/productos/${id}`);
    }
 
    deleteProductos(id: string){
     return this.http.delete(`/api/productos/${id}`);
    }
 
    //Necesito un juego de tipo juego
    saveProductos(producto: Producto){
     return this.http.post(`/api/productos`,producto);
    }
 
    updateProductos(id: string|number,updateProducto: Producto){
     return this.http.put(`/api/productos/${id}`, updateProducto);
    }
 

   getporFechas(fecha : fechas){
    return this.http.post(`/api/productos/buscar/uno`,fecha);
  }
}
