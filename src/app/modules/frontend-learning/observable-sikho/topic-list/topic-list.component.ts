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
    }
]
  redirectToLearning(){
    this.router.navigateByUrl('learning')
  }
}
