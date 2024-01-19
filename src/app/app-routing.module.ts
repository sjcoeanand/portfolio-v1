import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './modules/landing-page/landing-page.component';
import { AboutPageComponent } from './modules/about-page/about-page.component';

const routes: Routes = [
  {
    path : '',
    component : LandingPageComponent
  },
  {
    path : 'about',
    component : AboutPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
