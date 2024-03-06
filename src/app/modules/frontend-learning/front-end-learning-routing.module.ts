import { DebounceTimeComponent } from './observable-sikho/debounce-time/debounce-time.component';
import { CustomObservableComponent } from './observable-sikho/custom-observable/custom-observable.component';
import {  NgModule } from '@angular/core';
import {  RouterModule,  Routes } from '@angular/router';
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
import { SubjectBehaviourComponent } from './observable-sikho/subject-behaviour/subject-behaviour.component';
import { ReplaySubjectComponent } from './observable-sikho/replay-subject/replay-subject.component';
import { ForkJoinComponent } from './observable-sikho/fork-join/fork-join.component';
import { RouteResolveComponent } from './sample-dummy-components/route-resolve/route-resolve.component';
import {  addEditClietResolver } from 'src/app/services/authguard.service';
import { AsyncSubjectComponent } from './observable-sikho/async-subject/async-subject.component';
import { ConcatComponent } from './observable-sikho/concat/concat.component';
import { MergeComponent } from './observable-sikho/merge/merge.component';
import { MergeMapComponent } from './observable-sikho/merge-map/merge-map.component';
import { ConcatMapComponent } from './observable-sikho/concat-map/concat-map.component';
import { SwitchMapComponent } from './observable-sikho/switch-map/switch-map.component';
import { ShareReplayComponent } from './observable-sikho/share-replay/share-replay.component';


const routes: Routes = [
  {
    path : '',
    component : FrontendLearningComponent,
  },
  {
    path : 'resolve-route',
    component : RouteResolveComponent,
    resolve : {photoList : addEditClietResolver}
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
      },
      {
        path : 'fork-join',
        component : ForkJoinComponent
      },
      {
        path : 'async-subject',
        component : AsyncSubjectComponent
      },
      {
        path : 'concat-obs',
        component : ConcatComponent
      },
      {
        path : 'merge-obs',
        component : MergeComponent
      },
      {
        path : 'merge-map-obs',
        component : MergeMapComponent
      },
      {
        path : 'cancat-map-obs',
        component : ConcatMapComponent
      },
      {
        path : 'switch-map',
        component : SwitchMapComponent
      },
      {
        path : 'share-replay',
        component : ShareReplayComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontEndLearningRoutingModule { }
