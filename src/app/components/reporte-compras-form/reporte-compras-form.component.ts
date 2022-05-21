import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReporteComprasService } from 'src/app/services/reporte-compras.service';

@Component({
  selector: 'app-reporte-compras-form',
  templateUrl: './reporte-compras-form.component.html',
  styleUrls: ['./reporte-compras-form.component.css']
})
export class ReporteComprasFormComponent implements OnInit {

  reportesCompras:  any = {
    id: 0,
    folio: '',
    producto: '',
    proovedor: ''
  };

  constructor(private reporteComprasService: ReporteComprasService, private router: Router) { }

  ngOnInit(): void {
  }

  saveNewReporteCompras(){
    delete this.reportesCompras.id;
    
    this.reporteComprasService.saveReporteCompras(this.reportesCompras)
    .subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/reporteCompras']);
      },
      err => console.log(err)
    )
  }
}
