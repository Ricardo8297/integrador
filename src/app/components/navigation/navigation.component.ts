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

  deletecarrito() {
    localStorage.removeItem("cart");
    this.reloadCurrentRoute()
    
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
      return 1;
    } else if(this.authService.getTypeUser() === 2) {
      return 2;
    }else{
      return 3;
    }
  }

  numberOfItems(){
    let itemsInCart = JSON.parse(localStorage.getItem('cart') || '{}');
    return itemsInCart.length;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
