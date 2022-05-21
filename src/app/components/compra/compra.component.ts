import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.ts.service';

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
    existencia: 0
  };

  edit: Boolean = false;

  constructor(private productosService: ProductosService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if  (params['id']){
      this.productosService.getProducto(params['id']).subscribe(
        res =>{
          console.log(res);
          this.producto = res;
          this.edit = true;
        },
        err => console.log(err)
      )
    }
    this.obtener_localstorage();
  }

  grabar_localstorage(){
    if(!localStorage.getItem('compra')){
      localStorage.setItem('compra', JSON.stringify(this.producto));
    }else if(!localStorage.getItem('comprados')){
      localStorage.setItem('comprados', JSON.stringify(this.producto));
    }else if(!localStorage.getItem('compratres')){
      localStorage.setItem('compratres', JSON.stringify(this.producto));
    }else if(!localStorage.getItem('compracuatro')){
      localStorage.setItem('compracuatro', JSON.stringify(this.producto));
    }else if(!localStorage.getItem('compracinco')){
      localStorage.setItem('compracinco', JSON.stringify(this.producto));
    }else{
      console.log("error")
    }
    this.router.navigate(['/carrito']);
  }

  
  

  obtener_localstorage(){
    let compra = JSON.parse(localStorage.getItem("compra") || '{}');
  }

}
