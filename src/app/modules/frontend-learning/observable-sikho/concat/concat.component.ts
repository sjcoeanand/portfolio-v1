import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, concat, interval, map, take, timeout, timer } from 'rxjs';
import { ObserverServiceService } from 'src/app/services/ObserverServiceService';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.scss']
})
export class ConcatComponent {
  constructor(private router : Router, private servInst: ObserverServiceService){}
  redirectToObservable(){
    this.router.navigateByUrl('learning/observable-sikho')
  }

  obs1Data:any;
  ngOnInit(): void {
    
    let custObs11 = interval(1000).pipe( map(x => (x+1)), take(4))
    let custObs12 = interval(1000).pipe( map(x => (x+11)), take(3))
    let custObs13 = interval(1000).pipe( map(x => (x+21)), take(2))
    
    let custConcat = concat(custObs11, custObs12, custObs13).subscribe(res => this.servInst.printStream(res, 'custConcatId'))
  }


}
