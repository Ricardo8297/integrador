import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reabastecimiento } from '../models/Reabastecimiento';

@Injectable({
  providedIn: 'root'
})
export class ReabastecimientoService {

//Api
API_URI = 'http://localhost:3000/api'

constructor(private http: HttpClient) { }
 

getReportesCompras(){
  return this.http.get(`${this.API_URI}/reabastecimiento`);
 }

 getReporteCompras(id: string){
  return this.http.get(`${this.API_URI}/reabastecimiento/${id}`);
 }

 deleteReporteCompras(id: string){
  return this.http.delete(`${this.API_URI}/reabastecimiento/${id}`);
 }

 //Necesito un juego de tipo juego
 saveReporteCompras(updateReabastecimiento: Reabastecimiento){
  return this.http.post(`${this.API_URI}/reabastecimiento`,updateReabastecimiento);
 }

 updateReporteCompras(id: string|number,updateReabastecimiento: Reabastecimiento){
  return this.http.put(`${this.API_URI}/reabastecimiento/${id}`, updateReabastecimiento);
 }

}