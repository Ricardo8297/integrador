import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { fechas } from '../models/fechas';

import { Ventas } from '../models/Ventas';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class VentasService {


  //Api
  API_URI = 'http://localhost:3000/api'

  constructor(private http: HttpClient, private authService: AuthService) { }


  getVentas() {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + this.authService.getToken());
    return this.http.get(`${this.API_URI}/ventas`, { headers });
  }

  getVenta(id: string) {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + this.authService.getToken());
    return this.http.get(`${this.API_URI}/ventas/${id}`, { headers });
  }

  deleteVenta(id: string) {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + this.authService.getToken());
    return this.http.delete(`${this.API_URI}/ventas/${id}`, { headers });
  }

  //Necesito un juego de tipo juego
  saveVenta(venta: Ventas) {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + this.authService.getToken());
    return this.http.post(`${this.API_URI}/ventas`, venta, { headers });
  }

  updateVenta(id: string | number, updateVenta: Ventas) {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + this.authService.getToken());
    return this.http.put(`${this.API_URI}/ventas/${id}`, updateVenta, { headers });
  }
  getporFechas(fecha : fechas){
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + this.authService.getToken());
    return this.http.post(`${this.API_URI}/ventas/buscar/uno`,fecha,{ headers });
  }
}