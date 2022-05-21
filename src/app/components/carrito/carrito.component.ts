import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  productos: any = [];
  productodos: any = [];
  productotres: any = [];
  productocuatro: any = [];
  productocinco: any = [];
  total: number | undefined;
  constructor( private router: Router, private activatedRoute: ActivatedRoute) { 
    const total = this.productos.precio + this.productodos.precio + this.productotres.precio + this.productocuatro.precio + this.productocinco.precio;
  }

  ngOnInit(): void {
    
    this.obtener_localstorage();

    
  }

  obtener_localstorage(){
    let compra = JSON.parse(localStorage.getItem("compra") || '{}');
    let comprados = JSON.parse(localStorage.getItem("comprados") || '{}');
    let compratres = JSON.parse(localStorage.getItem("compratres") || '{}');
    let compracuatro = JSON.parse(localStorage.getItem("compracuatro") || '{}');
    let compracinco = JSON.parse(localStorage.getItem("compracinco") || '{}');
    this.productos = compra;
    this.productodos = comprados;
    this.productotres = compratres;
    this.productocuatro = compracuatro;
    this.productocinco = compracinco;
  }

  reloadCurrentRoute() {
    this.ngOnInit();
}

  eliminar(key: string){
    localStorage.removeItem(key);
    this.reloadCurrentRoute();
  }


}
