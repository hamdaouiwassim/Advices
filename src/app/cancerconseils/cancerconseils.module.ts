import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CancerconseilsPage } from './cancerconseils.page';

const routes: Routes = [
  {
    path: '',
    component: CancerconseilsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CancerconseilsPage]
})
export class CancerconseilsPageModule {}
