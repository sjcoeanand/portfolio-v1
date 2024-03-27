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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { ForkJoinComponent } from './observable-sikho/fork-join/fork-join.component';
import { RouteResolveComponent } from './sample-dummy-components/route-resolve/route-resolve.component';
import { AsyncSubjectComponent } from './observable-sikho/async-subject/async-subject.component';
import { ConcatComponent } from './observable-sikho/concat/concat.component';
import { MergeComponent } from './observable-sikho/merge/merge.component';
import { MergeMapComponent } from './observable-sikho/merge-map/merge-map.component';
import { ConcatMapComponent } from './observable-sikho/concat-map/concat-map.component';
import { SwitchMapComponent } from './observable-sikho/switch-map/switch-map.component';
import { ShareReplayComponent } from './observable-sikho/share-replay/share-replay.component';
import { AuthenticationFormsComponent } from './angular-topics/authentication-forms/authentication-forms.component';

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
    StringLimitPipe, ReplaySubjectComponent, ForkJoinComponent, RouteResolveComponent, AsyncSubjectComponent, ConcatComponent, 
    MergeComponent, MergeMapComponent, ConcatMapComponent, SwitchMapComponent, ShareReplayComponent, AuthenticationFormsComponent
  ],
  imports: [
    CommonModule,
    FrontEndLearningRoutingModule,FormsModule,ReactiveFormsModule
  ]
})
export class FrontEndLearningModule { }
