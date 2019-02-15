import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PressioncausesPage } from './pressioncauses.page';

const routes: Routes = [
  {
    path: '',
    component: PressioncausesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PressioncausesPage]
})
export class PressioncausesPageModule {}
