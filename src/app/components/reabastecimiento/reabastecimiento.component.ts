import { Component, OnInit } from '@angular/core';
import { ReabastecimientoService } from 'src/app/services/reabastecimiento.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reabastecimiento',
  templateUrl: './reabastecimiento.component.html',
  styleUrls: ['./reabastecimiento.component.css']
})
export class ReabastecimientoComponent implements OnInit {
  reportes: any = [];
  reporte2: any = [];
  fecha: any = {
    fecha1: "",
    fecha2: ""
  }
dateNow: Date = new Date();
  dateNowISO = this.dateNow.toISOString();
  dateNowMilliseconds = this.dateNow.getTime();

  constructor(private reporteServices: ReabastecimientoService) { }
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
          //footer: '<a href="">Why do I have this issue?</a>'
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