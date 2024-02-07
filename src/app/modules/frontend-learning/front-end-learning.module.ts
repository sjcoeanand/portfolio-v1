import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontEndLearningRoutingModule } from './front-end-learning-routing.module';
import { AsyncAwaitComponent } from './async-await/async-await.component';
import { ObservableSikhoComponent } from './observable-sikho/observable-sikho.component';


@NgModule({
  declarations: [
    AsyncAwaitComponent,
    ObservableSikhoComponent
  ],
  imports: [
    CommonModule,
    FrontEndLearningRoutingModule
  ]
})
export class FrontEndLearningModule { }
