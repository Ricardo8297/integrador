import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reabastecimiento } from '../models/Reabastecimiento';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ReabastecimientoService {

//Api
API_URI = 'http://localhost:3000/api'

constructor(private http: HttpClient, private authService: AuthService) { }
 

getReportesCompras(){
  const headers = new HttpHeaders()
  .set('Authorization', 'Bearer ' + this.authService.getToken());
  return this.http.get(`${this.API_URI}/reabastecimiento`, { headers });
 }

 getReporteCompras(id: string){
  const headers = new HttpHeaders()
  .set('Authorization', 'Bearer ' + this.authService.getToken());
  return this.http.get(`${this.API_URI}/reabastecimiento/${id}`, { headers });
 }

 deleteReporteCompras(id: string){
  const headers = new HttpHeaders()
  .set('Authorization', 'Bearer ' + this.authService.getToken());
  return this.http.delete(`${this.API_URI}/reabastecimiento/${id}`, { headers });
 }

 //Necesito un juego de tipo juego
 saveReporteCompras(updateReabastecimiento: Reabastecimiento){
  const headers = new HttpHeaders()
  .set('Authorization', 'Bearer ' + this.authService.getToken());
  return this.http.post(`${this.API_URI}/reabastecimiento`,updateReabastecimiento, { headers });
 }

 updateReporteCompras(id: string|number,updateReabastecimiento: Reabastecimiento){
  const headers = new HttpHeaders()
  .set('Authorization', 'Bearer ' + this.authService.getToken());
  return this.http.put(`${this.API_URI}/reabastecimiento/${id}`, updateReabastecimiento, { headers });
 }

}