import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.scss']
})
export class TopicListComponent {
  constructor(private router : Router){}
  rxjsTopicList:any[] = [
    {
      name : 'From Event',
      routerLinkPath : 'from-event'
    },
    {
      name : 'Interval',
      routerLinkPath : 'interval'
    },
    {
      name : 'Of From',
      routerLinkPath : 'of-from'
    },
    {
      name : 'Custom Observable',
      routerLinkPath : 'custom-observable'
    },
    {
      name : 'Map',
      routerLinkPath : 'normal-map'
    },
    {
      name : 'Filter',
      routerLinkPath : 'filter-obs'
    },
    {
      name : 'Tap',
      routerLinkPath : 'tap-obs'
    },
    {
      name : 'Take',
      routerLinkPath : 'take-obs'
    },
    {
      name : 'Retry',
      routerLinkPath : 'retry-obs'
    },
    {
      name : 'Scan',
      routerLinkPath : 'scan-obs'
    },
    {
      name : 'Debounce and DistinctUntillChanged',
      routerLinkPath : 'debounce-time'
    },
    {
      name : 'Subject & BehaviourSubject',
      routerLinkPath : 'subject-bsub'
    },
    {
      name : 'Replay Subject',
      routerLinkPath : 'replay-subject'
    },
    {
      name : 'Fork Join',
      routerLinkPath : 'fork-join'
    },
    {
      name : 'Async Subject',
      routerLinkPath : 'async-subject'
    },
    {
      name : 'Concat',
      routerLinkPath : 'concat-obs'
    },
    {
      name : 'Merge',
      routerLinkPath : 'merge-obs'
    },
    {
      name : 'MergeMap',
      routerLinkPath : 'merge-map-obs'
    },
    {
      name : 'ConcatMap',
      routerLinkPath : 'cancat-map-obs'
    },
    {
      name : 'switchMap',
      routerLinkPath : 'switch-map'
    },
    {
      name : 'exhaustMap',
      routerLinkPath : 'exhaust-map'
    }
]
  redirectToLearning(){
    this.router.navigateByUrl('learning')
  }
}
