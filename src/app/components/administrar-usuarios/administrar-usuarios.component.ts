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

  ngOnInit(): void {
    this.getUsuarios();
    
  }

  getUsuarios(){
    this.authService.getUsuarios().subscribe(
      res => {
        this.usuarios = res;
        console.log(this.usuarios,"usuarios")
      },
      err => console.error(err)
    );
    
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
}
