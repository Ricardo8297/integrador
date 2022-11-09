import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
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
    Swal.fire({
      title: '¿Estas seguro de que quieres eliminar este producto?',
      text: "Tu no puedes revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminalo!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.productosService.deleteProductos(id).subscribe(
          res =>{
            console.log(res)
            
            Swal.fire(
              'Producto eliminado',
              '',
              'warning'
            )
            this.getProductos();
          },
          err => console.log(err)
        )
        
      }
    })
  }
  
}
