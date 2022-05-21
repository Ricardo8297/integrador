import { Component, OnInit } from '@angular/core';
import { GarantiaAdminService } from 'src/app/services/garantia-admin.service';

@Component({
  selector: 'app-vista-garantias',
  templateUrl: './vista-garantias.component.html',
  styleUrls: ['./vista-garantias.component.css']
})
export class VistaGarantiasComponent implements OnInit {

  reportes: any = [];

  constructor(private reporteServices: GarantiaAdminService) { }
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