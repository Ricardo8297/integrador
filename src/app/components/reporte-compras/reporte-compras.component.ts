import { Component, OnInit } from '@angular/core';
import { ReporteComprasService } from 'src/app/services/reporte-compras.service';

@Component({
  selector: 'app-reporte-compras',
  templateUrl: './reporte-compras.component.html',
  styleUrls: ['./reporte-compras.component.css']
})
export class ReporteComprasComponent implements OnInit {

  reportes: any = [];

  constructor(private reporteServices: ReporteComprasService) { }
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

}
