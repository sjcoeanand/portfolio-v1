import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontEndLearningRoutingModule } from './front-end-learning-routing.module';
import { AsyncAwaitComponent } from './async-await/async-await.component';
import { ObservableSikhoComponent } from './observable-sikho/observable-sikho.component';
import { FromEventComponent } from './observable-sikho/from-event/from-event.component';
import { TopicListComponent } from './observable-sikho/topic-list/topic-list.component';


@NgModule({
  declarations: [
    AsyncAwaitComponent,
    ObservableSikhoComponent,
    FromEventComponent,
    TopicListComponent
  ],
  imports: [
    CommonModule,
    FrontEndLearningRoutingModule
  ]
})
export class FrontEndLearningModule { }
