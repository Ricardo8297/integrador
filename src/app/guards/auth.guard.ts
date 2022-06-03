import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';
import { ValideI } from 'src/app/models/valide';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  user: ValideI = {
    dataUser: {
      accessToken: ''
    }
  };
  private isError = false;
  canActivate(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
   // console.log("a")
    if (this.authService.getUser()) {
      //console.log("b")
      this.user.dataUser.accessToken = this.authService.getToken();
      return this.authService.validateToken(this.user).
        pipe(
          map((res) => {
           // console.log("c")
            if (res.dataUser.accessToken === '') {
              console.log("d")
              Swal.fire(
                {
                  icon: 'error',
                  title: 'Oops...',
                  text: '¡La sesión ha caducado por favor ingrese de nuevo!',
                }
              );
              //console.log('antes de logout');
              this.authService.logout();
              //console.log('antes route');
              this.router.navigate(['/iniciosesion']);
              //console.log('antes de mandar false');
              return false;
            } else {
              //console.log("e")
              
              return true;
            }
          })
        );
    }
    Swal.fire(
      {
        icon: 'error',
        title: 'Oops...',
        text: '¡La sesión ha caducado por favor ingrese de nuevo!',
      }
    );
    //console.log('antes de logout');
    this.authService.logout();
    //console.log('antes route');
    this.router.navigate(['/iniciosesion']);
    //console.log('antes de mandar false');
    return false;
  }
}

/* this.user.dataUser.accessToken = this.authService.getToken();
      // console.log(this.user);
      await this.authService.validateToken(this.user).subscribe(
        res => {
          if (res.dataUser.accessToken === '') {
            this.isError = true;
          } else {
            this.isError = false;
            console.log(res);
          }
        },
        err => {
          if (err.status === 401) {
            this.isError = true;
          }
        }
      );
      if (this.isError === false) {
        console.log('antes de mandar true');
        return true;
      } else if (this.isError === true) {
        Swal.fire(
          {
            icon: 'error',
            title: 'Oops...',
            text: '¡La sesión ha caducado por favor ingrese de nuevo!',
          }
        );
        console.log('antes de logout');
        this.authService.logout();
        console.log('antes route');
        this.router.navigate(['/auth/login']);
        console.log('antes de mandar false');
        return false;
      } */
