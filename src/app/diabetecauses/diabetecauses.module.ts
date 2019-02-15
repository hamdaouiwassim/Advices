import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DiabetecausesPage } from './diabetecauses.page';

const routes: Routes = [
  {
    path: '',
    component: DiabetecausesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DiabetecausesPage]
})
export class DiabetecausesPageModule {}
