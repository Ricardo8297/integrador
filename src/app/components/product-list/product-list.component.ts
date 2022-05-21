import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.ts.service'
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productos: any = [];

  constructor(private productosService: ProductosService) { }

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

  deleteProductos(id: string){
    if(confirm('Estas seguro de que quieres eliminar este producto?')) {
    this.productosService.deleteProductos(id).subscribe(
      res =>{
        console.log(res)
        this.getProductos();
      },
      err => console.log(err)
    )
    }
  }

}
