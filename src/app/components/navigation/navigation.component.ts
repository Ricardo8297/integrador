import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  items: any = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private authService: AuthService) { }

  ngOnInit(): void {

    this.obtener_localstorage();
    //? console.log(this.items,"items");
  }

  obtener_localstorage() {

    this.items = JSON.parse(localStorage.getItem('cart') || '{}');
   
   
  }

  reloadCurrentRoute() {
   this.ngOnInit();
  }

  eliminar(){
    localStorage.removeItem('cart');
    this.router.navigate(['/carrito']);
  }


  onCheckUser() {
    if (this.authService.getUser() === null) {
      return false;
    } else {
      return true;
    }
  }

  typeUser() {
    if (this.authService.getTypeUser() === 1) {
      //console.log(this.authService.getTypeUser(),"1")
      return 1;
    } else if(this.authService.getTypeUser() === 2) {
      return 2;
      //console.log(this.authService.getTypeUser(),"2")
    }else{
      //console.log(this.authService.getTypeUser(),"3")
      return 3;
    }
  }

  numberOfItems(){
    let itemsInCart = JSON.parse(localStorage.getItem('cart') || '{}');
    return itemsInCart.length;
  }

  logout(): void {
    localStorage.removeItem('cart');
  this.router.navigate([this.reloadCurrentRoute]);
    window.location.reload();
   
    this.obtener_localstorage();
    this.authService.logout();

  }

}
