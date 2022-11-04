import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.ts.service';
import Swal from 'sweetalert2';

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
    proovedor: '',
    fecha: new Date()
  };

  edit: Boolean = false;

  public error = '';
  public isError = false;
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
    delete this.producto.fecha;
    this.productosService.saveProductos(this.producto)
    .subscribe(
      res => {
        console.log(res)
        this.isError = false;
        this.router.navigate(['/productos']);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Registro exitoso',
          showConfirmButton: false,
          timer: 1500
        })
      },
      err =>
      {
        this.onIsError();
        this.error = (err.error.message);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: (this.error),
          
        })
      }
    )
  }


  updateProductos(){
    delete this.producto.fecha;
    this.productosService.updateProductos(this.producto.id, this.producto)
    .subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/productos/compra',this.producto.id]);
        this.isError = false;
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Cambios Guardados',
          showConfirmButton: false,
          timer: 1500
        })
      },
      err =>
      {
        this.onIsError();
        this.error = (err.error.message);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: (this.error),
          
        })
      }
    )
  }
  onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000);
  }
}
