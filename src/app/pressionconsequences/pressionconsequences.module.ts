import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PressionconsequencesPage } from './pressionconsequences.page';

const routes: Routes = [
  {
    path: '',
    component: PressionconsequencesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PressionconsequencesPage]
})
export class PressionconsequencesPageModule {}
