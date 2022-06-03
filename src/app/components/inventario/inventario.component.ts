import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.ts.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {
  productos: any = [];
  filterreports='';
  constructor(private productosService: ProductosService) { 

  }

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
}
