import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { garantiaAdmin } from '../models/garantiaAdmin';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GarantiaAdminService {

  //Api
  API_URI = 'http://localhost:3000/api'

  constructor(private http: HttpClient, private authService: AuthService) { }
   
  
  getGarantias(){
    const headers = new HttpHeaders()
  .set('Authorization', 'Bearer ' + this.authService.getToken());
    return this.http.get(`${this.API_URI}/garantiaadmin`, {headers});
   }

   getGarantia(id: string){
    const headers = new HttpHeaders()
    .set('Authorization', 'Bearer ' + this.authService.getToken());
    return this.http.get(`${this.API_URI}/garantiaadmin/${id}`, {headers});
   }

   deleteGarantia(id: string){
    const headers = new HttpHeaders()
    .set('Authorization', 'Bearer ' + this.authService.getToken());
    return this.http.delete(`${this.API_URI}/garantiaadmin/${id}`, {headers});
   }

   saveGarantia(game: garantiaAdmin){
    const headers = new HttpHeaders()
    .set('Authorization', 'Bearer ' + this.authService.getToken());
    return this.http.post(`${this.API_URI}/garantiaadmin`,game, {headers});
   }

   updateGarantia(id: string|number,updatedGame: garantiaAdmin){
    const headers = new HttpHeaders()
    .set('Authorization', 'Bearer ' + this.authService.getToken());
    return this.http.put(`${this.API_URI}/garantiaadmin/${id}`, updatedGame, {headers});
   }

}
