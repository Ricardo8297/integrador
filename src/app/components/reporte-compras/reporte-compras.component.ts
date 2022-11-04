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
    if(this.fecha.fecha1 == "" || this.fecha.fecha2 == ""){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Selecciona un rango de fechas valido!',
        
      })
    }else{
    this.reporteServices.getporFechas(this.fecha).subscribe(
      res => {
        this.reportes = res;
        if(this.reportes==""){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Selecciona un rango de fechas valido!',
          
        })
      }
        console.log(res)
      },
      err => console.error(err)
    );
    }
  }

  generarReporte(){
    window.print();
  }
}
