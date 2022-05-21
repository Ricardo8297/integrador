import { Component, OnInit } from '@angular/core';
import { GarantiaService } from 'src/app/services/garantia.service';

@Component({
  selector: 'app-vista-garantias-clientes',
  templateUrl: './vista-garantias-clientes.component.html',
  styleUrls: ['./vista-garantias-clientes.component.css']
})
export class VistaGarantiasClientesComponent implements OnInit {

  reportes: any = [];

  constructor(private reporteServices: GarantiaService) { }
  filterreport='';
  ngOnInit(): void {
    this.getReportes();
  }

  getReportes(){
    this.reporteServices.getGarantias().subscribe(
      res => {
        this.reportes = res;
      },
      err => console.error(err)
    );
  }

}