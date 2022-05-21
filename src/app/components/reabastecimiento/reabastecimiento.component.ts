import { Component, OnInit } from '@angular/core';
import { ReabastecimientoService } from 'src/app/services/reabastecimiento.service';

@Component({
  selector: 'app-reabastecimiento',
  templateUrl: './reabastecimiento.component.html',
  styleUrls: ['./reabastecimiento.component.css']
})
export class ReabastecimientoComponent implements OnInit {

  reportes: any = [];

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

}