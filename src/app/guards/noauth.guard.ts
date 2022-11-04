import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { ValideI } from '../models/valide';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NoauthGuard implements CanActivate {
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
    //? guard con back if (this.authService.getUser()) {
      if (this.authService.getTypeUser()==1 || this.authService.getTypeUser()==2) {
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


/*canActivate() {
  if (this.authService.getUser() === null) {
    return true;
  } else {
    this.router.navigate(['/']);
    return false;
  }
}**/

