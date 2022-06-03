import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { registroI } from 'src/app/models/registro';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})


export class RegistroComponent implements OnInit {
  
  public isError = false;
  public error = '';

  user: registroI = {
    names: '',
    passw: '',
    passwc: '',
    apellidop: '',
    apellidom: '',
    direccion: '',
    telefono: 0,
    email: ''
  };
  constructor(private authService: AuthService, private router: Router, private activatedRoute: ActivatedRoute) {
    
   }

  ngOnInit(): void {
  }

  register() {
    this.authService.register(this.user).subscribe(
      res => {
        this.router.navigate(['/']);
        this.isError = false;
      },
      err => {
        this.onIsError();
        this.error = (err.error.message);
      }
    );
  }

  onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000);
  }
}
