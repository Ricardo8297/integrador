import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ReporteCompras } from '../models/ReporteCompras';

@Injectable({
  providedIn: 'root'
})
export class ReporteComprasService {


   //Api
   API_URI = 'http://localhost:3000/api'

   constructor(private http: HttpClient) { }
    
   
   getReportesCompras(){
     return this.http.get(`${this.API_URI}/reportecompras`);
    }
 
    getReporteCompras(id: string){
     return this.http.get(`${this.API_URI}/reportecompras/${id}`);
    }
 
    deleteReporteCompras(id: string){
     return this.http.delete(`${this.API_URI}/reportecompras/${id}`);
    }
 
    //Necesito un juego de tipo juego
    saveReporteCompras(reportecompras: ReporteCompras){
     return this.http.post(`${this.API_URI}/reportecompras`,reportecompras);
    }
 
    updateReporteCompras(id: string|number,updateCompra: ReporteCompras){
     return this.http.put(`${this.API_URI}/reportecompras/${id}`, updateCompra);
    }
 
}
