import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fork-join',
  templateUrl: './fork-join.component.html',
  styleUrls: ['./fork-join.component.scss']
})
export class ForkJoinComponent {
  constructor(private router : Router){}
  
  redirectToObservable(){
    this.router.navigateByUrl('learning/observable-sikho')
  }
}
