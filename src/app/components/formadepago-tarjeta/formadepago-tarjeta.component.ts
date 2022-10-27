import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ProductosService } from 'src/app/services/productos.ts.service';
import { ReabastecimientoService } from 'src/app/services/reabastecimiento.service';
import { VentasService } from 'src/app/services/ventas.service';
import Swal from 'sweetalert2';
import { take } from 'rxjs/operators';
@Component({
  selector: 'app-formadepago-tarjeta',
  templateUrl: './formadepago-tarjeta.component.html',
  styleUrls: ['./formadepago-tarjeta.component.css']
})
export class FormadepagoTarjetaComponent implements OnInit {

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
  productodos: any = {
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
  usuariocomprando: any = [];
  venta: any = {
    id: 0,
    total: 0,
    producto: '',
    comprador: '',
    cantidad: 0,
    fecha: new Date()
  }

  reabastecimiento: any = {
    id: 0,
    folio: 0,
    producto: '',
    proovedor: '',
    cantidad: 0,
    fecha: new Date()
  }

  constructor(private reabastecimientoService: ReabastecimientoService, private authservice: AuthService, private productosservice: ProductosService, private ventasService: VentasService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let shopping_cart = [];
    shopping_cart = JSON.parse(localStorage.getItem('cart') || '{}');
    for (let i in shopping_cart) {
      this.productosservice.getProducto(shopping_cart[i].product.id).pipe(take(1)).toPromise()
         .then((res => {;
         this.productodos = res;
         console.log(this.productodos)
         }));
    }
  }


  saveNewVenta() {
    //*Metodo de Guardar la venta 

    //? Elimina la fecha y el id porque se generan automaticamente el la DB
    delete this.venta.fecha;
    delete this.venta.id;

    //*Guardar nueva venta con ayuda del quantity del localstorage
    let shopping_cart = [];
    let cantidadlocal = 0;
    let productos = '';


    //*Guarada el local storage en un arreglo
    shopping_cart = JSON.parse(localStorage.getItem('cart') || '{}');


    //*Obtener los productos y la cantidad

    //! Arreglar la cantidad de productos ya que no tiene coherencia 
    //! (solo muestra la cantidad total [deberia ser por producto]) 
    for (let i in shopping_cart) {
      productos += shopping_cart[i].product.nombre + "\n";
      cantidadlocal += shopping_cart[i].quantity;
    }

    this.venta.total = this.totalCompra();
    this.venta.producto = productos;

    //*Obtiene el tipo de usuario para guardarlo (si no esta loggeado lo guarda como "Anonimo")
    this.venta.comprador = this.getUser();
    this.venta.cantidad = cantidadlocal;

    //console.log(this.venta)
    //Swal.fire({
     // icon: 'error',
      //title: 'Oops...',
      //text: 'Algo ha salido mal con las compras :('
      
    //})
    
    //*Metodo para guardar la nueva existencia

    //? Elimina el id porque se genera automaticamente el la DB
    delete this.producto.id;

    //*Guarda una nueva existencia para reemplazar la anterior
    let nuevaexistencia = 0;

    //*Variables para guardar la cantidad final, restando la cantidad a comprar a la existencia
    let aux = 0;
    let aux2 = 0;
    let noerror = true;
    console.log("antes for")
    for(let x in this.productodos){
      console.log(this.productodos.existencia)
    if(this.productodos.existencia<=0){
      noerror = false;
      console.log("antes del cambio")
      console.log(this.productodos.existencia)
      console.log(noerror)  
      break;    
    }
    }
    console.log("despues for")
    console.log("despues del cambio")
    console.log(noerror)
    if(noerror == true){
    for (let i in shopping_cart) {

      //*Guardamos los datos del localstorage en el arreglo "producto"
      this.producto.nombre = shopping_cart[i].product.nombre;
      this.producto.codigo = shopping_cart[i].product.codigo;
      this.producto.precio = shopping_cart[i].product.precio;
      this.producto.descripcion = shopping_cart[i].product.descripcion;
      this.producto.categoria = shopping_cart[i].product.categoria;
      this.producto.imagen = shopping_cart[i].product.imagen;

      aux = shopping_cart[i].quantity;
      aux2 = shopping_cart[i].product.existencia;
      nuevaexistencia = aux2 - aux;

      this.producto.existencia = nuevaexistencia;

      //*Metodo para generar la lista de reabastecimiento

      //*Si agotamos la existencia agregamos un reporte de reabastecimiento

      if (this.producto.existencia <= 0) {
        delete this.reabastecimiento.fecha;
        this.reabastecimiento.folio = 0;
        this.reabastecimiento.producto = shopping_cart[i].product.nombre;
        this.reabastecimiento.proovedor = shopping_cart[i].product.proovedor;
        /** 
        * ! El reabastecimiento es estatico
        * ! Se debe corregir tomandolo de la DB
        */
        this.reabastecimiento.cantidad = Math.random() * (50 - 20) + 20;;

        //TODO: Guarda el reporte de reabastecimiento
        this.reabastecimientoService.saveReporteReabastecimiento(this.reabastecimiento)
          .subscribe(
            res => {
              console.log(res)
            },
            err => console.log(err)
          )
      }

      this.producto.proovedor = shopping_cart[i].product.proovedor;

      //console.log(this.producto)

      //TODO: Actualiza la existencia del producto
      this.productosservice.updateProductos(shopping_cart[i].product.id, this.producto)
        .subscribe(
          res => {
            console.log(res)
          },
          err => console.log(err)
        )
    }
  
    //TODO: Guarda la venta
    this.ventasService.saveVenta(this.venta)
      .subscribe(
        res => {
          console.log(res)
        },
        err => console.log(err)
      )
    //? Elimina el carrito
    localStorage.removeItem('cart');
    //this.router.navigate([this.router.url])
    this.router.navigate(['/gracias']);
    }else{
       Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Algo ha salido mal con las compras :('
      })
      //? Elimina el carrito
    localStorage.removeItem('cart');
    //this.router.navigate([this.router.url])
    this.router.navigate(['/vistaproductos']);
    }
    


  }
  
  totalCompra() {
    let shopping_cart = [];
    let suma = 0;
    let total = 0;
    let multi = 0;
    shopping_cart = JSON.parse(localStorage.getItem('cart') || '{}');

    for (let i in shopping_cart) {
      suma = shopping_cart[i].quantity;
      multi = shopping_cart[i].product.precio;
      total += suma * multi;
    }
    return total;
  }


  getUser() {
    this.usuariocomprando = this.authservice.getUser();
    if (this.usuariocomprando == null) {
      return "Anonimo";
    } else {
      return this.usuariocomprando.dataUser.name;
    }
  }


}
