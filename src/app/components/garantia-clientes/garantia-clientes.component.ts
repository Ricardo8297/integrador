import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GarantiaService } from 'src/app/services/garantia.service';



@Component({
  selector: 'app-garantia-clientes',
  templateUrl: './garantia-clientes.component.html',
  styleUrls: ['./garantia-clientes.component.css']
})
export class GarantiaClientesComponent implements OnInit {
  garantia: any = {
    id: 0,
    codigoProducto: '',
    imagen: ''
  };
   
  edit: Boolean = false;
  constructor(private garantiaService: GarantiaService, private router: Router) { }
  filterreport='';
  ngOnInit(): void {
  
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
