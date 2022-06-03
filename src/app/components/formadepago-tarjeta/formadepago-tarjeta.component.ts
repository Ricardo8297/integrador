import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ProductosService } from 'src/app/services/productos.ts.service';
import { ReabastecimientoService } from 'src/app/services/reabastecimiento.service';
import { VentasService } from 'src/app/services/ventas.service';

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
  }
  constructor(private reabastecimientoService:ReabastecimientoService, private authservice: AuthService ,private productosservice: ProductosService,private ventasService: VentasService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
  }
  saveNewVenta(){
    delete this.venta.fecha;
    delete this.venta.id;


    let shopping_cart = [];
    let cantidadlocal = 0;
    let productos = '';

    

    shopping_cart = JSON.parse(localStorage.getItem('cart') || '{}');
    
    for(let i in shopping_cart){
      productos += shopping_cart[i].product.nombre + "\n";
      cantidadlocal += shopping_cart[i].quantity;

    }
    this.venta.total = this.totalCompra();
    this.venta.producto = productos;
 
    this.venta.comprador = this.getUser();
    this.venta.cantidad = cantidadlocal; 
    


    console.log(this.venta)
    
    
    this.ventasService.saveVenta(this.venta)
    .subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    )
    delete this.producto.id;
    let nuevaexistencia=0;
    let aux = 0;
    let aux2 = 0;
    for(let i in shopping_cart){
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
      if(this.producto.existencia <= 0){
        this.reabastecimiento.folio = 0;
        this.reabastecimiento.producto = shopping_cart[i].product.nombre;
        this.reabastecimiento.proovedor = shopping_cart[i].product.proovedor;
        this.reabastecimiento.cantidad = 20;
        this.reabastecimientoService.saveReporteCompras(this.reabastecimiento).subscribe(
          res => {
            console.log(res)
          },
          err => console.log(err)
        )
      }
      this.producto.proovedor = shopping_cart[i].product.proovedor;
      console.log(this.producto)
      this.productosservice.updateProductos(shopping_cart[i].product.id, this.producto)
    .subscribe(   
      res => {
        console.log(res)
      },
      err => console.log(err)
    )
    }
    localStorage.removeItem('cart');
    //this.router.navigate([this.router.url])
    this.router.navigate(['/gracias']);
   
    
  }
  totalCompra(){
    let shopping_cart = [];
    let suma = 0;
    let total = 0;
    let multi = 0;
    shopping_cart = JSON.parse(localStorage.getItem('cart') || '{}');
    
    for(let i in shopping_cart){
      suma = shopping_cart[i].quantity;
      multi = shopping_cart[i].product.precio;
      total += suma * multi;  
    }
    return total;
  }

  getUser(){
    this.usuariocomprando = this.authservice.getUser();
    if(this.usuariocomprando == null){
      return "Anonimo";
    }else{
    return this.usuariocomprando.dataUser.name;
  }
  }

  
}
