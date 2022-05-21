import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { garantia } from '../models/garantia';

@Injectable({
  providedIn: 'root'
})
export class GarantiaService {

  //Api
  API_URI = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { }
   
  
  getGarantias(){ 
    return this.http.get(`${this.API_URI}/garantia`);
   }

   getGarantia(id: string){
    return this.http.get(`${this.API_URI}/garantia/${id}`);
   }

   deleteGarantia(id: string){
    return this.http.delete(`${this.API_URI}/garantia/${id}`);
   }

   saveGarantia(game: garantia){
    return this.http.post(`${this.API_URI}/garantia`,game);
   }

   updateGarantia(id: string|number,updatedGame: garantia){
    return this.http.put(`${this.API_URI}/garantia/${id}`, updatedGame);
   }

}
