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
  //API_URI = 'http://10.0.1.49:3000/api'
  API_URI = 'http://localhost:3000/api';
  constructor(private http: HttpClient, private authService: AuthService) { }


  getVentas() {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + this.authService.getToken());
    return this.http.get(`/api/ventas`, { headers });
  }

  getVenta(id: string) {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + this.authService.getToken());
    return this.http.get(`/api/ventas/${id}`, { headers });
  }

  deleteVenta(id: string) {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + this.authService.getToken());
    return this.http.delete(`/api/ventas/${id}`, { headers });
  }

  saveVenta(venta: Ventas) {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + this.authService.getToken());
    return this.http.post(`/api/ventas`, venta, { headers });
  }

  updateVenta(id: string | number, updateVenta: Ventas) {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + this.authService.getToken());
    return this.http.put(`/api/ventas/${id}`, updateVenta, { headers });
  }

  getporFechas(fecha : fechas){
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + this.authService.getToken());
    return this.http.post(`/api/ventas/buscar/uno`,fecha,{ headers });
  }

}