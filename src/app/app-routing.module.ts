import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './modules/landing-page/landing-page.component';
const routes: Routes = [
  {
    path : '',
    component : LandingPageComponent
  },  
  {
    path : 'learning',
    loadChildren : () => import('./modules/frontend-learning/front-end-learning.module').then(r => r.FrontEndLearningModule),
    data : {
      breadcumb : 'Learning'
    }
  },
  {
    path: '**', 
    component: LandingPageComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
