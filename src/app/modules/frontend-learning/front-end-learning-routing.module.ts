import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontendLearningComponent } from './frontend-learning.component';
import { AsyncAwaitComponent } from './async-await/async-await.component';
import { ObservableSikhoComponent } from './observable-sikho/observable-sikho.component';

const routes: Routes = [
  {
    path : '',
    component : FrontendLearningComponent
  },
  {
    path : 'async-await',
    component : AsyncAwaitComponent
  },
  {
    path : 'observable-sikho',
    component: ObservableSikhoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontEndLearningRoutingModule { }
