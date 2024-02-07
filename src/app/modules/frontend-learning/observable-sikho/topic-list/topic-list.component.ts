import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.scss']
})
export class TopicListComponent {
  constructor(private router : Router){}
  redirectToLearning(){
    this.router.navigateByUrl('learning')
  }
}
