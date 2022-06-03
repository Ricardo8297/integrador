import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { fechas } from '../models/fechas';

import { ReporteCompras } from '../models/ReporteCompras';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ReporteComprasService {


   //Api
   API_URI = 'http://localhost:3000/api'

   constructor(private http: HttpClient, private authService: AuthService) { }
    
   
   getReportesCompras(){ 
    const headers = new HttpHeaders()
              .set('Authorization', 'Bearer ' + this.authService.getToken());
     return this.http.get(`${this.API_URI}/reportecompras`, {headers} );
    }
 
    getReporteCompras(id: string){
      const headers = new HttpHeaders()
              .set('Authorization', 'Bearer ' + this.authService.getToken());
     return this.http.get(`${this.API_URI}/reportecompras/${id}`, {headers});
    }
 
    deleteReporteCompras(id: string){
      const headers = new HttpHeaders()
              .set('Authorization', 'Bearer ' + this.authService.getToken());
     return this.http.delete(`${this.API_URI}/reportecompras/${id}`, {headers});
    }
 
    //Necesito un juego de tipo juego
    saveReporteCompras(reportecompras: ReporteCompras){
      const headers = new HttpHeaders()
              .set('Authorization', 'Bearer ' + this.authService.getToken());
     return this.http.post(`${this.API_URI}/reportecompras`,reportecompras, {headers});
    }
 
    updateReporteCompras(id: string|number,updateCompra: ReporteCompras){
      const headers = new HttpHeaders()
              .set('Authorization', 'Bearer ' + this.authService.getToken());
     return this.http.put(`${this.API_URI}/reportecompras/${id}`, updateCompra, {headers});
    }
    getporFechas(fecha : fechas){
      const headers = new HttpHeaders()
        .set('Authorization', 'Bearer ' + this.authService.getToken());
      return this.http.post(`${this.API_URI}/reportecompras/buscar/uno`,fecha,{ headers });
    }
}
