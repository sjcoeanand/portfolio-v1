import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './modules/landing-page/landing-page.component';
import { FrontendLearningComponent } from './modules/frontend-learning/frontend-learning.component';
import { StockMarketComponent } from './modules/stock-market/stock-market.component';

const routes: Routes = [
  {
    path : '',
    component : LandingPageComponent
  },
  {
    path : 'learning',
    component : FrontendLearningComponent
  },
  {
    path : 'project',
    component : StockMarketComponent
  },
  {
    path: '**', 
    component: LandingPageComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
