import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PressionconseilsPage } from './pressionconseils.page';

const routes: Routes = [
  {
    path: '',
    component: PressionconseilsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PressionconseilsPage]
})
export class PressionconseilsPageModule {}
