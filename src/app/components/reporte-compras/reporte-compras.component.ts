import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ReporteComprasService } from 'src/app/services/reporte-compras.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reporte-compras',
  templateUrl: './reporte-compras.component.html',
  styleUrls: ['./reporte-compras.component.css']
})
export class ReporteComprasComponent implements OnInit {

  reportes: any = [];
  fecha: any = {
    fecha1: "",
    fecha2: ""
}
  constructor(private reporteServices: ReporteComprasService, private authService: AuthService) { }
  filterreport='';
  ngOnInit(): void {
    this.getReportes();
  }

  getReportes(){
    this.reporteServices.getReportesCompras().subscribe(
      res => {
        this.reportes = res;
        
      },
      err => console.error(err)
    );
  }
  getReportesfechados(){
    this.reporteServices.getporFechas(this.fecha).subscribe(
      res => {
        this.reportes = res;
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Selecciona un rango de fechas valido!',
          
        })
        console.log(res)
      },
      err => console.error(err)
    );
  }

  generarReporte(){
    window.print();
  }
}
