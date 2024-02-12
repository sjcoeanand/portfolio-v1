import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontEndLearningRoutingModule } from './front-end-learning-routing.module';
import { AsyncAwaitComponent } from './async-await/async-await.component';
import { ObservableSikhoComponent } from './observable-sikho/observable-sikho.component';
import { FromEventComponent } from './observable-sikho/from-event/from-event.component';
import { TopicListComponent } from './observable-sikho/topic-list/topic-list.component';
import { IntervalComponent } from './observable-sikho/interval/interval.component';
import { OfFromComponent } from './observable-sikho/of-from/of-from.component';
import { CustomObservableComponent } from './observable-sikho/custom-observable/custom-observable.component';
import { MapComponent } from './observable-sikho/map/map.component';
import { FilterComponent } from './observable-sikho/filter/filter.component';
import { FormsModule } from '@angular/forms';
import { TapComponent } from './observable-sikho/tap/tap.component';


@NgModule({
  declarations: [
    AsyncAwaitComponent,
    ObservableSikhoComponent,
    FromEventComponent,
    TopicListComponent,
    IntervalComponent,
    OfFromComponent,
    CustomObservableComponent,
    MapComponent,
    FilterComponent,
    TapComponent
  ],
  imports: [
    CommonModule,
    FrontEndLearningRoutingModule,FormsModule
  ]
})
export class FrontEndLearningModule { }
