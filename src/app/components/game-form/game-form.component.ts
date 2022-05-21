import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from 'src/app/models/Game';
import { GamesService } from 'src/app/services/games.service';


@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {

  //El componente principal tiene una clase row
  //opcional
  @HostBinding('class') classes = 'row';

  game: any = {
    id: 0,
    title: '',
    description: '',
    imagen: '',
    created_at: new Date()
  };
   
  edit: Boolean = false;
  constructor(private gameService: GamesService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    //si es /games/add/?
    const params = this.activatedRoute.snapshot.params;
    if  (params['id']){
      this.gameService.getGame(params['id']).subscribe(
        res =>{
          console.log(res)
          this.game = res;
          this.edit = true;
        },
        err => console.log(err)
      )
    }
  }

  saveNewGame(){
    delete this.game.created_at;
    delete this.game.id;
    
    this.gameService.saveGame(this.game)
    .subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/games']);
      },
      err => console.log(err)
    )
  }

  updateGame(){
    delete this.game.created_at;
    
    this.gameService.updateGame(this.game.id, this.game)
    .subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/games']);
      },
      err => console.log(err)
    )
  }
}
