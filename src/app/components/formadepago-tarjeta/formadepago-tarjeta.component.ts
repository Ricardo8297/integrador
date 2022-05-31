import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VentasService } from 'src/app/services/ventas.service';

@Component({
  selector: 'app-formadepago-tarjeta',
  templateUrl: './formadepago-tarjeta.component.html',
  styleUrls: ['./formadepago-tarjeta.component.css']
})
export class FormadepagoTarjetaComponent implements OnInit {

  venta: any = {
  id: 0,
  folio: 0,
  producto: '',
  proovedor: '',
  cantidad: 0,
  fecha: new Date()
  }
  constructor(private ventasService: VentasService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }
  saveNewVenta(){
    delete this.venta.fecha;
    delete this.venta.id;


    let shopping_cart = [];
    let cantidadlocal = 0;
    shopping_cart = JSON.parse(localStorage.getItem('cart') || '{}');
    
    for(let i in shopping_cart){
      cantidadlocal += shopping_cart[i].quantity;
    }

    this.venta.cantidad = cantidadlocal; 

    console.log(this.venta.cantidad,"cantidad")
    
    /*
    this.ventasService.saveVenta(this.venta)
    .subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    )
    */
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
}
