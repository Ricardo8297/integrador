import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { UserI } from '../models/user';
import { JwtResponseI } from '../models/jwt-response';
import { ValideI } from '../models/valide';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { isNullOrUndefined } from 'is-what';
import { registroI } from '../models/registro';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_UR = 'http://localhost:3000/';
  authSubject = new BehaviorSubject(false);
  private token!: string;
  constructor(private http: HttpClient) { }
  
  register(user: registroI): Observable<JwtResponseI> {
      return this.http.post<JwtResponseI>(`${this.API_UR}auth/register`,
        user).pipe(tap(
          (res: JwtResponseI) => {
            if (res) {
              // guardar token
              this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn);
            }
          })
        );
    }

  login(user: UserI): Observable<JwtResponseI> {
    return this.http.post<JwtResponseI>(`${this.API_UR}auth/login`,
      user).pipe(tap(
        (res: JwtResponseI) => {
          if (res) {
            // guardar token
            this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn);
            this.setUser(res);
          }
        })
      );
  }

  setUser(user: JwtResponseI): void {
    const userString = JSON.stringify(user);
    localStorage.setItem('currentUser', userString);
  }

  getUser() {
    const userString = localStorage.getItem('currentUser');
    if (!isNullOrUndefined(userString)) {
      const user: JwtResponseI = JSON.parse(userString);
      //console.log("usuario de service",user)
      return user;
    } else {
      return null;
    }
  }

  getTypeUser() {
    const userString = localStorage.getItem('currentUser');
    if (!isNullOrUndefined(userString)) {
      const user: JwtResponseI = JSON.parse(userString);

      return user.dataUser.typeUser;
    } else {
      return null;
    }
  }

  logout(): void {
    this.token = '';
    localStorage.removeItem('currentUser');
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('EXPIRES_IN');
  }
  private saveToken(token: string, expiresIn: string): void {
    localStorage.setItem('ACCESS_TOKEN', token);
    localStorage.setItem('EXPIRES_IN', expiresIn);
    this.token = token;
  }

  getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('ACCESS_TOKEN') as string;
    }
    return this.token;
  }
  validateToken(token: ValideI): Observable<ValideI> {
    //console.log("token",token)
    return this.http.post<ValideI>(`${this.API_UR}auth/validate_token`, token);
  }
  /**validateToken(token: ValideI,tipo: ValideI): Observable<ValideI> {
    return this.http.post<ValideI>(`${this.API_UR}auth/validate_token`, token,tipo);
  } */

  
  getUsuarios(){
    return this.http.get(`${this.API_UR}auth`);
   }

   deleteUsuario(id: string){
    return this.http.delete(`${this.API_UR}auth/${id}`);
   }
}


