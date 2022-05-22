import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserI } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent implements OnInit {

  public isError = false;
  public error = '';

  user: UserI = {
    names: '',
    passw: ''
  };
  constructor(private authService: AuthService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.user).subscribe(
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
