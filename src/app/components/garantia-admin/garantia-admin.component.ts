import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { GarantiaAdminService } from 'src/app/services/garantia-admin.service';

@Component({
  selector: 'app-garantia-admin',
  templateUrl: './garantia-admin.component.html',
  styleUrls: ['./garantia-admin.component.css']
})
export class GarantiaAdminComponent implements OnInit {
  garantia:  any = {
    id: 0,
    codigoProducto: '',
    motivo: '',
  };

  constructor(private reporteComprasService: GarantiaAdminService, private router: Router) { }
  filterreport =""
  ngOnInit(): void {
    
  }

  saveNewGarantia(){
    delete this.garantia.id;
    
    this.reporteComprasService.saveGarantia(this.garantia)
    .subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/garantiaadmin/vista']);
      },
      err => console.log(err)
    )
  }

  getGarantias(){
    this.reporteComprasService.getGarantias().subscribe(
      res => {
        this.garantia = res;
      },
      err => console.error(err)
    );
  }
}

  

