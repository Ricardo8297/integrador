import { Component, OnInit } from '@angular/core';
import { GarantiaService } from 'src/app/services/garantia.service';
import { ProductosService } from 'src/app/services/productos.ts.service';

@Component({
  selector: 'app-vista-garantias-clientes',
  templateUrl: './vista-garantias-clientes.component.html',
  styleUrls: ['./vista-garantias-clientes.component.css']
})
export class VistaGarantiasClientesComponent implements OnInit {
  productos: any = [];
  reportes: any = [];

  constructor(private reporteServices: GarantiaService,private productosService: ProductosService) { }
  filterreport='';
  ngOnInit(): void {
    this.getReportes();
    this.getProductos;
  }

  getReportes(){
    this.reporteServices.getGarantias().subscribe(
      res => {
        this.reportes = res;
      },
      err => console.error(err)
    );
  }
  getProductos(){
    this.productosService.getProductos().subscribe(
      res => {
        this.productos = res;
      },
      err => console.error(err)
    );
  }
}