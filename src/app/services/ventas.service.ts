import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Ventas } from '../models/Ventas';

@Injectable({
  providedIn: 'root'
})
export class VentasService {


   //Api
   API_URI = 'http://localhost:3000/api'

   constructor(private http: HttpClient) { }
    
   
   getVentas(){
     return this.http.get(`${this.API_URI}/ventas`);
    }
 
    getVenta(id: string){
     return this.http.get(`${this.API_URI}/ventas/${id}`);
    }
 
    deleteVenta(id: string){
     return this.http.delete(`${this.API_URI}/ventas/${id}`);
    }
 
    //Necesito un juego de tipo juego
    saveVenta(venta: Ventas){
     return this.http.post(`${this.API_URI}/ventas`,venta);
    }
 
    updateVenta(id: string|number,updateVenta: Ventas){
     return this.http.put(`${this.API_URI}/ventas/${id}`, updateVenta);
    }
 
}