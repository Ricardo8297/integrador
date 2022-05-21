import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.ts.service';

@Component({
  selector: 'app-vistaproductos',
  templateUrl: './vistaproductos.component.html',
  styleUrls: ['./vistaproductos.component.css']
})
export class VistaproductosComponent implements OnInit {

  productos: any = [];

  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
    this.getProductos();
  }
  filterproduct ='';

  getProductos(){
    this.productosService.getProductos().subscribe(
      res => {
        this.productos = res;
      },
      err => console.error(err)
    );
  }

  deleteProductos(id: string){
    this.productosService.deleteProductos(id).subscribe(
      res =>{
        console.log(res)
        this.getProductos();
      },
      err => console.log(err)
    )
  }

}
