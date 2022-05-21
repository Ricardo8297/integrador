import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {


  productos: any = [];
  productodos: any = [];
  productotres: any = [];
  productocuatro: any = [];
  productocinco: any = [];

  constructor( private router: Router, private activatedRoute: ActivatedRoute) { }

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

deletecarrito(){
  localStorage.clear();
}
  
}
