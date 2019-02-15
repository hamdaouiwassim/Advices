import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diabete',
  templateUrl: './diabete.page.html',
  styleUrls: ['./diabete.page.scss'],
})
export class DiabetePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goTodiabetecauses(){
    this.router.navigate(['/diabetecauses']);
  }
  goTodiabeteconsequences(){
    this.router.navigate(['/diabeteconsequences']);
  }
  goTodiabeteconseils(){
    this.router.navigate(['/diabeteconseils']);
  }

}
