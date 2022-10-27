import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { fechas } from '../models/fechas';
import { Reabastecimiento } from '../models/Reabastecimiento';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ReabastecimientoService {

//Api
//API_URI = 'http://10.0.1.49:3000/api'
API_URI = 'http://localhost:3000/api';
constructor(private http: HttpClient, private authService: AuthService) { }


getReportesCompras(){
  const headers = new HttpHeaders()
  .set('Authorization', 'Bearer ' + this.authService.getToken());
  return this.http.get(`/api/reabastecimiento`, { headers });
 }

 getReporteCompras(id: string){
  const headers = new HttpHeaders()
  .set('Authorization', 'Bearer ' + this.authService.getToken());
  return this.http.get(`/api/reabastecimiento/${id}`, { headers });
 }

 deleteReporteCompras(id: string){
  const headers = new HttpHeaders()
  .set('Authorization', 'Bearer ' + this.authService.getToken());
  return this.http.delete(`/api/reabastecimiento/${id}`, { headers });
 }

 //Necesito un juego de tipo juego
 saveReporteReabastecimiento(updateReabastecimiento: Reabastecimiento){
  const headers = new HttpHeaders()
  .set('Authorization', 'Bearer ' + this.authService.getToken());
  return this.http.post(`/api/reabastecimiento`,updateReabastecimiento, { headers });
 }

 updateReporteCompras(id: string|number,updateReabastecimiento: Reabastecimiento){
  const headers = new HttpHeaders()
  .set('Authorization', 'Bearer ' + this.authService.getToken());
  return this.http.put(`/api/reabastecimiento/${id}`, updateReabastecimiento, { headers });
 }


 getporFechas(fecha : fechas){
  const headers = new HttpHeaders()
    .set('Authorization', 'Bearer ' + this.authService.getToken());
  return this.http.post(`/api/reabastecimiento/buscar/uno`,fecha,{ headers });
}

}
