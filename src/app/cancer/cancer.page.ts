import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cancer',
  templateUrl: './cancer.page.html',
  styleUrls: ['./cancer.page.scss'],
})
export class CancerPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  goTocancercauses(){
    this.router.navigate(['/cancercauses']);
  }
  goTocancerconsequences(){
    this.router.navigate(['/cancerconsequences']);
  }
  goTocancerconseils(){
    this.router.navigate(['/cancerconseils']);
  }
}
