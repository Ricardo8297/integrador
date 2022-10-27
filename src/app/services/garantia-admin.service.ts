import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { garantiaAdmin } from '../models/garantiaAdmin';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GarantiaAdminService {

  //Api
  //API_URI = 'http://10.0.1.49:3000/api'
  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient, private authService: AuthService) { }


  getGarantias(){
    const headers = new HttpHeaders()
  .set('Authorization', 'Bearer ' + this.authService.getToken());
  return this.http.get(`/api/garantiaadmin`, {headers});
   }

   getGarantia(id: string){
    const headers = new HttpHeaders()
    .set('Authorization', 'Bearer ' + this.authService.getToken());
    return this.http.get(`/api/garantiaadmin/${id}`, {headers});
   }

   deleteGarantia(id: string){
    const headers = new HttpHeaders()
    .set('Authorization', 'Bearer ' + this.authService.getToken());
    return this.http.delete(`/api/garantiaadmin/${id}`, {headers});
   }

   saveGarantia(game: garantiaAdmin){
    const headers = new HttpHeaders()
    .set('Authorization', 'Bearer ' + this.authService.getToken());
    return this.http.post(`/api/garantiaadmin`,game, {headers});
   }

   updateGarantia(id: string|number,updatedGame: garantiaAdmin){
    const headers = new HttpHeaders()
    .set('Authorization', 'Bearer ' + this.authService.getToken());
    return this.http.put(`/api/garantiaadmin/${id}`, updatedGame, {headers});
   }

}
