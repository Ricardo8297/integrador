import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.ts.service';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent implements OnInit {


  producto: any = {
    id: 0,
    nombre: '',
    codigo: '',
    precio: 0,
    descripcion: '',
    categoria: '',
    imagen: '',
    existencia: 0,
    proovedor: ''
  };

  edit: Boolean = false;


  constructor(private productosService: ProductosService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if  (params['id']){
      this.productosService.getProducto(params['id']).subscribe(
        res =>{
          console.log(res)
          this.producto = res;
          this.edit = true;
        },
        err => console.log(err)
      )
    }
  }

  saveNewProducto(){
    delete this.producto.id;
    
    this.productosService.saveProductos(this.producto)
    .subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/productos']);
      },
      err => console.log(err)
    )
  }


  updateProductos(){
    
    this.productosService.updateProductos(this.producto.id, this.producto)
    .subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/productos']);
      },
      err => console.log(err)
    )
  }

}
