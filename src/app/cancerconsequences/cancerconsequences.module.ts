import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CancerconsequencesPage } from './cancerconsequences.page';

const routes: Routes = [
  {
    path: '',
    component: CancerconsequencesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CancerconsequencesPage]
})
export class CancerconsequencesPageModule {}
