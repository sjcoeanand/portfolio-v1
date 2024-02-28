import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { concatAll, concatMap, delay, from, map, mergeMap, of } from 'rxjs';
import { ObserverServiceService } from 'src/app/services/ObserverServiceService';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.scss']
})
export class ConcatMapComponent {
  constructor(private router : Router, private servInst: ObserverServiceService){}
  redirectToObservable(){
    this.router.navigateByUrl('learning/observable-sikho')
  }

  changeToObservable(val:any){
    return of(val+ ' - Video Uploaded').pipe(delay(2000))
  }
  
  ngOnInit(){
    const obs1 = from(['Java', 'Node', 'dotNet']);

    // Example 1
    obs1.pipe(
      map(x => this.changeToObservable(x))      
    )
    .subscribe(res => {
      this.servInst.printStream(res, 'obsConcat1')     
    })

    // Example 2
    obs1.pipe(
      mergeMap(x => this.changeToObservable(x))
    )
    .subscribe(res => {
      this.servInst.printStream(res, 'obsConcat2')     
    })

    // Example 3
    obs1.pipe(
      concatMap(x => this.changeToObservable(x))
    )
    .subscribe(res => {
      this.servInst.printStream(res, 'obsConcat3')     
    })

  }
}
