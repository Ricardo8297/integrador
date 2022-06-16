import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { GarantiaAdminService } from 'src/app/services/garantia-admin.service';
import { ProductosService } from 'src/app/services/productos.ts.service';

@Component({
  selector: 'app-garantia-admin',
  templateUrl: './garantia-admin.component.html',
  styleUrls: ['./garantia-admin.component.css']
})
export class GarantiaAdminComponent implements OnInit {
  productos: any = []
  garantia:  any = {
    id: 0,
    codigoProducto: '',
    motivo: '',
  };

  constructor(private reporteComprasService: GarantiaAdminService, private router: Router,private productosService: ProductosService) { }
  filterreport =""
  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(){
    this.productosService.getProductos().subscribe(
      res => {
        this.productos = res;
      },
      err => console.error(err)
    );
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

  

