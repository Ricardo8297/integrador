import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { garantia } from '../models/garantia';

@Injectable({
  providedIn: 'root'
})
export class GarantiaService {

  //Api
  //API_URI = 'http://10.0.1.49:3000/api'
  API_URI = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }


  getGarantias(){
  return this.http.get(`/api/garantia`);
   }

   getGarantia(id: string){
   return this.http.get(`/api/garantia/${id}`);
   }

   deleteGarantia(id: string){
   return this.http.delete(`/api/garantia/${id}`);
   }

   saveGarantia(game: garantia){
   return this.http.post(`/api/garantia`,game);
   }

   updateGarantia(id: string|number,updatedGame: garantia){
   return this.http.put(`/api/garantia/${id}`, updatedGame);
   }

}