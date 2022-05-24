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
  total: number;
  precio1: number;
  precio2: number;
  precio3: number | undefined;
  precio4: number | undefined;
  precio5: number | undefined;
  constructor( private router: Router, private activatedRoute: ActivatedRoute) { 
    this.total = 0;
    this.precio1 = 0;
    this.precio2 = 0;
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
    this.precio1 = this.productos.precio;
    this.precio2 = this.productodos.precio;
    this.precio3 = this.productotres.precio;
    this.precio4 = this.productocuatro.precio;
    this.precio5 = this.productocinco.precio;
    if(!this.precio1){
      this.total = 0;
    }else if (!this.precio2){
      this.total = this.precio1;
    }else if (!this.precio3){
      this.total = this.precio1+this.precio2;
    }else if (!this.precio4){
      this.total = this.precio1+this.precio2+this.precio3;
    }else if (!this.precio5){
      this.total = this.precio1+this.precio2+this.precio4;
    }else{
      this.total = this.precio1+this.precio2+this.precio4+this.precio5;
    }
    
    
  }

  reloadCurrentRoute() {
    this.ngOnInit();
}

  eliminar(key: string){
    localStorage.removeItem(key);
    this.reloadCurrentRoute();
  }


}
