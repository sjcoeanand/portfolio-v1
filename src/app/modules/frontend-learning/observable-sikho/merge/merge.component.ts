import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { interval, map, take, concat, merge } from 'rxjs';
import { ObserverServiceService } from 'src/app/services/ObserverServiceService';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss']
})
export class MergeComponent {
  constructor(private router : Router, private servInst: ObserverServiceService){}
  redirectToObservable(){
    this.router.navigateByUrl('learning/observable-sikho')
  }

  obs1Data:any;
  ngOnInit(): void {
 
    let custObs11 = interval(1000).pipe( map(x => (x+1)), take(4))
    let custObs12 = interval(2000).pipe( map(x => (x+11)), take(3))
    let custObs13 = interval(3000).pipe( map(x => (x+21)), take(2))
    
    let custConcat = merge(custObs11, custObs12, custObs13).subscribe(res => this.servInst.printStream(res, 'custConcatId'))
  }

}
