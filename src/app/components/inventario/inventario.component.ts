import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.ts.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})

export class InventarioComponent implements OnInit {
  reportes: any = [];
  reporte2: any = [];
  fecha: any = {
    fecha1: "",
    fecha2: ""
  }
  productos: any = [];
  filterreports='';
  constructor(private productosService: ProductosService) { 

  }
  

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

  getReportesfechados(){
    if(this.fecha.fecha1 == "" || this.fecha.fecha2 == ""){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Selecciona un rango de fechas valido!',
        
      })
    }else{
      this.productosService.getporFechas(this.fecha).subscribe(
        res => {
          this.productos = res;
          console.log(this.productos.fecha)
          if(this.productos==""){
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Selecciona un rango de fechas valido!',
              
            })
            //footer: '<a href="">Why do I have this issue?</a>'
          }
          console.log(res)
        },
        err => console.error(err)
      );
    }
  }

  generarReporte(){
    window.print();
  }
}
