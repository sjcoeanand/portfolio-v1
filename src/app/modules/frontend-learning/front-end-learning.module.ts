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
import { TakeObsComponent } from './observable-sikho/take-obs/take-obs.component';
import { RetryScanComponent } from './observable-sikho/retry-scan/retry-scan.component';
import { ScanComponent } from './observable-sikho/scan/scan.component';
import { DebounceTimeComponent } from './observable-sikho/debounce-time/debounce-time.component';
import { SubjectBehaviourComponent } from './observable-sikho/subject-behaviour/subject-behaviour.component';
import { CompSub1Component } from './observable-sikho/comp-sub1/comp-sub1.component';
import { CompSub2Component } from './observable-sikho/comp-sub2/comp-sub2.component';
import { CompSub3Component } from './observable-sikho/comp-sub3/comp-sub3.component';
import { StringLimitPipe } from 'src/app/pipes/string-limit.pipe';
import { ReplaySubjectComponent } from './observable-sikho/replay-subject/replay-subject.component';

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
    TapComponent,
    TakeObsComponent,
    RetryScanComponent,
    ScanComponent,
    DebounceTimeComponent,
    SubjectBehaviourComponent,
    CompSub1Component,
    CompSub2Component,
    CompSub3Component,    
    StringLimitPipe, ReplaySubjectComponent
  ],
  imports: [
    CommonModule,
    FrontEndLearningRoutingModule,FormsModule
  ]
})
export class FrontEndLearningModule { }
