import { DebounceTimeComponent } from './observable-sikho/debounce-time/debounce-time.component';
import { CustomObservableComponent } from './observable-sikho/custom-observable/custom-observable.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontendLearningComponent } from './frontend-learning.component';
import { AsyncAwaitComponent } from './async-await/async-await.component';
import { ObservableSikhoComponent } from './observable-sikho/observable-sikho.component';
import { FromEventComponent } from './observable-sikho/from-event/from-event.component';
import { TopicListComponent } from './observable-sikho/topic-list/topic-list.component';
import { IntervalComponent } from './observable-sikho/interval/interval.component';
import { OfFromComponent } from './observable-sikho/of-from/of-from.component';
import { MapComponent } from './observable-sikho/map/map.component';
import { FilterComponent } from './observable-sikho/filter/filter.component';
import { TapComponent } from './observable-sikho/tap/tap.component';
import { TakeObsComponent } from './observable-sikho/take-obs/take-obs.component';
import { RetryScanComponent } from './observable-sikho/retry-scan/retry-scan.component';
import { ScanComponent } from './observable-sikho/scan/scan.component';
import { debounceTime } from 'rxjs';
import { SubjectBehaviourComponent } from './observable-sikho/subject-behaviour/subject-behaviour.component';
import { ReplaySubjectComponent } from './observable-sikho/replay-subject/replay-subject.component';

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
    component: ObservableSikhoComponent,
    children : [
      {
        path : '',
        component : TopicListComponent
      },
      {
        path : 'from-event',
        component : FromEventComponent
      },
      {
        path : 'interval',
        component : IntervalComponent
      },
      {
        path : 'of-from',
        component : OfFromComponent
      },
      {
        path : 'custom-observable',
        component : CustomObservableComponent
      },
      {
        path : 'normal-map',
        component : MapComponent
      },
      {
        path : 'filter-obs',
        component : FilterComponent
      },
      {
        path : 'tap-obs',
        component : TapComponent
      },
      {
        path : 'take-obs',
        component : TakeObsComponent
      },
      {
        path : 'retry-obs',
        component : RetryScanComponent
      },
      {
        path : 'scan-obs',
        component : ScanComponent
      },
      {
        path : 'debounce-time',
        component : DebounceTimeComponent
      },
      {
        path : 'subject-bsub',
        component : SubjectBehaviourComponent
      },
      {
        path : 'replay-subject',
        component : ReplaySubjectComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontEndLearningRoutingModule { }
