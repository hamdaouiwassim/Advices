import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pression',
  templateUrl: './pression.page.html',
  styleUrls: ['./pression.page.scss'],
})
export class PressionPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  goTopressioncauses(){
    this.router.navigate(['/pressioncauses']);
  }
  goTopressionconsequences(){
    this.router.navigate(['/pressionconsequences']);
  }
  goTopressionconseils(){
    this.router.navigate(['/pressionconseils']);
  }
}
