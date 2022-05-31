import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
   total: number ;
  items: any = [];
  constructor( private router: Router, private activatedRoute: ActivatedRoute) { 
    this.total= 0;
  }

  ngOnInit(): void {
    
    this.obtener_localstorage();

    
  }

  obtener_localstorage() {

    this.items = JSON.parse(localStorage.getItem('cart') || '{}');
   
   
  }

  reloadCurrentRoute() {
    this.ngOnInit();
}

  eliminar(key: string){
    localStorage.removeItem(key);
    this.reloadCurrentRoute();
  }

  
  deleteItem(nombre: string){
    console.log("Deleting : ",nombre);
    let shopping_cart = [];
    let index;
    shopping_cart = JSON.parse(localStorage.getItem('cart') || '{}');
    for(let i in shopping_cart){
      if (nombre == shopping_cart[i].product.name)
      {
        index = i;
        console.log(index);
      }
    }
    shopping_cart.splice(index, 1);
    console.log("shopping_cart ", shopping_cart);
    localStorage.setItem('cart', JSON.stringify(shopping_cart));
    this.reloadCurrentRoute();
  }

  totalCompra(){
    
  }

}
