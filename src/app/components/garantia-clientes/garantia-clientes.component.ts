import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GarantiaService } from 'src/app/services/garantia.service';
import { ProductosService } from 'src/app/services/productos.ts.service';



@Component({
  selector: 'app-garantia-clientes',
  templateUrl: './garantia-clientes.component.html',
  styleUrls: ['./garantia-clientes.component.css']
})
export class GarantiaClientesComponent implements OnInit {
  productos: any = [];
  garantia: any = {
    id: 0,
    codigoProducto: '',
    imagen: ''
  };
   
  edit: Boolean = false;
  constructor(private garantiaService: GarantiaService, private router: Router,private productosService: ProductosService) { }
  filterreport='';
  ngOnInit(): void {
  this.getProductos();
  }

  getProductos(){
    this.productosService.getProductos().subscribe(
      res => {
        this.productos = res;
      },
      err => console.error(err)
    );
  }
  
  saveNewGarantia(){
    delete this.garantia.id;
    
    this.garantiaService.saveGarantia(this.garantia)
    .subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/garantiaClientes/vista']);
      },
      err => console.log(err)
    )
  }

  
}
