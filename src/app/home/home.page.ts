import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
constructor (private router : Router){

}

goTodiabete(){
  this.router.navigate(["/diabete"]);
}
goTopression(){
  this.router.navigate(["/pression"]);
}
goTocancer(){
  this.router.navigate(["/cancer"]);
}

}
