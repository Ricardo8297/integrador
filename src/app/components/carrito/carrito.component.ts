import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.ts.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
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
   total: number ;
  items: any = [];
  constructor(private productosService: ProductosService,private router: Router, private activatedRoute: ActivatedRoute) { 
    this.total= 0;
  }

  ngOnInit(): void {
    
    this.obtener_localstorage();
    this.totalCompra();
    
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

  getProductos(id : string){
    this.productosService.getProducto(id).subscribe(
      res => {
        this.producto = res;
        let local_storage;
        let itemsInCart = []
        this.items = {
          product: this.producto,
          quantity: 1,
        }

        
          local_storage = JSON.parse(localStorage.getItem('cart') || '{}');
         
          for(var i in local_storage)
          {
           
            if(this.items.product.id == local_storage[i].product.id)
            {
              local_storage[i].quantity += 1;
              if(local_storage[i].quantity > this.items.product.existencia){
                Swal.fire(
                  {
                    icon: 'error',
                    title: 'Lo sentimos',
                    text: 'Parece que no nos quedan mas',
                  }
                )
                local_storage[i].quantity -= 1;
              }
             
              this.items=null;
              break;  
            }
        }
        if(this.items){
          itemsInCart.push(this.items);
        }
        local_storage.forEach(function (item: any){
          itemsInCart.push(item);
        })
        localStorage.setItem('cart', JSON.stringify(itemsInCart));
      
      this.reloadCurrentRoute();
      },
      err => console.error(err)
    );
   
  }
  eliminarUno(id : string){
    this.productosService.getProducto(id).subscribe(
      res => {
        this.producto = res;
        let local_storage;
        let itemsInCart = []
        this.items = {
          product: this.producto,
          quantity: 1,
        }
        
        
          local_storage = JSON.parse(localStorage.getItem('cart') || '{}');
          
          for(var i in local_storage)
          {
            
            
            if(this.items.product.id == local_storage[i].product.id)
            {
              local_storage[i].quantity -= 1;
              if(local_storage[i].quantity == 0){
                Swal.fire(
                  {
                    icon: 'question',
                    title: 'Mmmh...',
                    text: '¿Por que comprarias menos de uno?',
                  }
                )
                local_storage[i].quantity += 1;
              }
              
             
              this.items=null;
              break;  
            }
          
        }
        if(this.items){
          itemsInCart.push(this.items);
        }
        local_storage.forEach(function (item: any){
          itemsInCart.push(item);
        })
        localStorage.setItem('cart', JSON.stringify(itemsInCart));
      
      this.reloadCurrentRoute();
      },
      err => console.error(err)
    );
   
  }

  estadoCarrito(){
    //console.log(this.items[0])
    this.reloadCurrentRoute();
    if(this.items[0] == undefined){
      this.reloadCurrentRoute();
      return false;
    }else{
      this.reloadCurrentRoute();
      return true
    }
  }
}
