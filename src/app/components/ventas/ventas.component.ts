import { Component, OnInit } from '@angular/core';
import { VentasService } from 'src/app/services/ventas.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
  reportes: any = [];
  reporte2: any = [];
  formatsDateTest: string[] = [
    'dd/MM/yyyy',
    'dd/MM/yyyy hh:mm:ss',
    'dd-MM-yyyy',
    'dd-MM-yyyy HH:mm:ss',
    'MM/dd/yyyy',
    'MM/dd/yyyy hh:mm:ss',
    'yyyy/MM/dd',
    'yyyy/MM/dd HH:mm:ss',
    'dd/MM/yy',
    'dd/MM/yy hh:mm:ss',
    'hh:mm:ss',
    'short',
    'medium',
    'long',
    'full',
    'shortDate',
    'mediumDate',
    'longDate',
    'fullDate',
    'shortTime',
    'mediumTime',
    'longTime',
    'fullTime',
  ];

  fecha: any = {
    fecha1: "",
    fecha2: ""
}

  dateNow: Date = new Date();
  dateNowISO = this.dateNow.toISOString();
  dateNowMilliseconds = this.dateNow.getTime();

  constructor(private ventasServices: VentasService) { }
  filterreport='';
  ngOnInit(): void {
    this.getReportes();
  }

  getReportes(){
    this.ventasServices.getVentas().subscribe(
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
    this.ventasServices.getporFechas(this.fecha).subscribe(
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
