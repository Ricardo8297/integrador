import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.ts.service';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

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
 items : any = [];
  edit: Boolean = false;

  constructor(private productosService: ProductosService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    const params = this.activatedRoute.snapshot.params;
    if (params['id']) {
      this.productosService.getProducto(params['id']).subscribe(
        res => {
          //*console.log(res);
          this.producto = res;
          this.edit = true;
        },
        err => console.log(err)
      )
    }
    this.obtener_localstorage();
  }

  grabar_localstorage() {
    let local_storage;
    let itemsInCart = []
    this.items = {
      product: this.producto,
      quantity: 1,
    }
    console.log(this.items)
    if(localStorage.getItem('cart')  == null){
      local_storage =[];
      console.log("LOCALSTORAGE NULL",JSON.parse(localStorage.getItem('cart') || '{}'));
      itemsInCart.push(this.items);
      localStorage.setItem('cart', JSON.stringify(itemsInCart));
      console.log('Pushed first Item: ', itemsInCart);
      this.router.navigate(['/carrito']);
    }else{
      local_storage = JSON.parse(localStorage.getItem('cart') || '{}');
      console.log("LOCAL STORAGE HAS ITEMS",JSON.parse(localStorage.getItem('cart') || '{}'));
      for(var i in local_storage)
      {
        console.log(local_storage[i].product.id);
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
          console.log("Quantity for "+i+" : "+ local_storage[i].quantity);
          console.log('same product! index is ', i); 
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
   this.router.navigate(['/carrito']);
  }
}


  obtener_localstorage() {
    let compra = JSON.parse(localStorage.getItem("compra") || '{}');
  }


  

}



// !
// ? 
// TODO 
// * 
////

/* 
let productId = 29;
    
    let storageProducts = JSON.parse(localStorage.getItem('products') || '{}');
    let products = storageProducts.filter((product: { productId: number; }) => product.productId !== productId );
    localStorage.setItem('products', JSON.stringify(products));)
   
//? Funcion con cantidad
 let products;
    let itemsInCart = []
    this.items = {
      product: this.producto,
      quantity: 1,
    }
    if(localStorage.getItem('cart')  == null){
      products =[];
      console.log("LOCALSTORAGE NULL",JSON.parse(localStorage.getItem('cart') || '{}'));
      itemsInCart.push(this.items);
      localStorage.setItem('cart', JSON.stringify(itemsInCart));
      console.log('Pushed first Item: ', itemsInCart);
    }
    else
    {
      products = JSON.parse(localStorage.getItem('cart')|| '{}');
      console.log("LOCAL STORAGE HAS ITEMS",JSON.parse(localStorage.getItem('cart')|| '{}'));
      for(var i in products)
      {
        console.log(products[i].producto.id);
        if(this.items.producto.id == products[i].producto.id)
        {
          products[i].quantity += 1;
          console.log("Quantity for "+i+" : "+ products[i].quantity);
          console.log('same product! index is ', i); 
          ////items=null;
          break;  
        }
    

        
          
   
      }
    }
 **/