import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-administrar-usuarios',
  templateUrl: './administrar-usuarios.component.html',
  styleUrls: ['./administrar-usuarios.component.css']
})
export class AdministrarUsuariosComponent implements OnInit {
  usuarios: any = [];
  constructor(private authService: AuthService) { }
  usuarioscount!: number;
  admincount!: number;
  proovedorcount!: number;
  totalcount!: number;
  baneadoscount!: number;
  ngOnInit(): void {
    this.usuarioscount = 0;
    this.admincount = 0;
    this.proovedorcount = 0;
    this.totalcount = 0;
    this.baneadoscount = 0;
    this.getUsuarios();
    
  }

  getUsuarios(){
    this.authService.getUsuarios().subscribe(
      res => {
        this.usuarios = res;
        console.log(this.usuarios,"usuarios")
        this.contar()
      },
      err => console.error(err)
    );
    
  }
  contar(){
    for(let i in this.usuarios){
      this.totalcount +=1;
    if(this.usuarios[i].tipo_usuario == 3){
    this.usuarioscount += 1;
    //console.log(this.usuarioscount)
  }
  if(this.usuarios[i].tipo_usuario == 2){
    this.proovedorcount += 1;
    console.log(this.proovedorcount)
  }
  if(this.usuarios[i].tipo_usuario == 1){
    this.admincount += 1;
  }
  if(this.usuarios[i].tipo_usuario == 4){
    this.baneadoscount += 1;
  }
  }
  }
  deleteUsuarios(id: string){
    Swal.fire({
      title: 'Estas seguro?',
      text: "Tu no puedes revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminalo!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.authService.deleteUsuario(id).subscribe(
          res =>{
            console.log(res)
            
            Swal.fire(
              'Operacion Exitosa!',
              'Eliminacion.',
              'success'
            )
            this.getUsuarios();
          },
          err => console.log(err)
        )
        
      }
    })
  }

  banear(id: string){
    Swal.fire({
      title: 'Estas seguro?',
      text: "Tu no puedes revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, banealo!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.authService.banear(id).subscribe(
          res =>{
            console.log(res)
            
            Swal.fire(
              'Operacion Exitosa!',
              'Eliminacion.',
              'success'
            )
            this.getUsuarios();
          },
          err => console.log(err)
        )
        
      }
    })
  }
  
 
}
