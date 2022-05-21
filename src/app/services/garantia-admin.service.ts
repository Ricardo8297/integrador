import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { garantiaAdmin } from '../models/garantiaAdmin';

@Injectable({
  providedIn: 'root'
})
export class GarantiaAdminService {

  //Api
  API_URI = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { }
   
  
  getGarantias(){
    return this.http.get(`${this.API_URI}/garantiaadmin`);
   }

   getGarantia(id: string){
    return this.http.get(`${this.API_URI}/garantiaadmin/${id}`);
   }

   deleteGarantia(id: string){
    return this.http.delete(`${this.API_URI}/garantiaadmin/${id}`);
   }

   saveGarantia(game: garantiaAdmin){
    return this.http.post(`${this.API_URI}/garantiaadmin`,game);
   }

   updateGarantia(id: string|number,updatedGame: garantiaAdmin){
    return this.http.put(`${this.API_URI}/garantiaadmin/${id}`, updatedGame);
   }

}
