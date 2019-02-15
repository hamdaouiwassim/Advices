import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'diabete', loadChildren: './diabete/diabete.module#DiabetePageModule' },
  { path: 'diabetecauses', loadChildren: './diabetecauses/diabetecauses.module#DiabetecausesPageModule' },
  { path: 'diabeteconsequences', loadChildren: './diabeteconsequences/diabeteconsequences.module#DiabeteconsequencesPageModule' },
  { path: 'diabeteconseils', loadChildren: './diabeteconseils/diabeteconseils.module#DiabeteconseilsPageModule' },
  { path: 'pressioncauses', loadChildren: './pressioncauses/pressioncauses.module#PressioncausesPageModule' },
  { path: 'pressionconsequences', loadChildren: './pressionconsequences/pressionconsequences.module#PressionconsequencesPageModule' },
  { path: 'pressionconseils', loadChildren: './pressionconseils/pressionconseils.module#PressionconseilsPageModule' },
  { path: 'cancerconseils', loadChildren: './cancerconseils/cancerconseils.module#CancerconseilsPageModule' },
  { path: 'cancerconsequences', loadChildren: './cancerconsequences/cancerconsequences.module#CancerconsequencesPageModule' },
  { path: 'cancercauses', loadChildren: './cancercauses/cancercauses.module#CancercausesPageModule' },
  { path: 'cancer', loadChildren: './cancer/cancer.module#CancerPageModule' },
  { path: 'pression', loadChildren: './pression/pression.module#PressionPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
