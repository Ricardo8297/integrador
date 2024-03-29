import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Game } from '../models/Game'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  //Api
  API_URI = 'http://10.0.1.49:3000/';

  constructor(private http: HttpClient) { }
   
  
  getGames(){
    return this.http.get(`${this.API_URI}/games`);
   }

   getGame(id: string){
    return this.http.get(`${this.API_URI}/games/${id}`);
   }

   deleteGame(id: string){
    return this.http.delete(`${this.API_URI}/games/${id}`);
   }

   //Necesito un juego de tipo juego
   saveGame(game: Game){
    return this.http.post(`${this.API_URI}/games`,game);
   }

   updateGame(id: string|number,updatedGame: Game){
    return this.http.put(`${this.API_URI}/games/${id}`, updatedGame);
   }

}
