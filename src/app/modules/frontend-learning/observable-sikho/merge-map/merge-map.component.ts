import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { interval, map, take, merge, from, of, mergeAll, mergeMap } from 'rxjs';
import { ObserverServiceService } from 'src/app/services/ObserverServiceService';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss']
})
export class MergeMapComponent {
  constructor(private router : Router, private servInst: ObserverServiceService){}
  redirectToObservable(){
    this.router.navigateByUrl('learning/observable-sikho')
  }

  obs1Data:any;
  ngOnInit(): void {
 
    const custObs1 = from(['Rxjs', 'Angular', 'React'])

    // Example 1
      custObs1.pipe(
        map(x => x),
      ).subscribe(res => {
        this.servInst.printStream(res, 'custObsMap1')
      })
      
      
      // Example 2
      custObs1.pipe(
        map(x => this.getVideoData(x)),
        mergeAll()
      ).subscribe(res => {
        this.servInst.printStream(res, 'custObsMap2')
      })

      // Example 3
      custObs1.pipe(
        mergeMap(x => this.getVideoData(x))
      ).subscribe(res => {
        this.servInst.printStream(res, 'custObsMap3')
      })
  }

  getVideoData(val:any){
    return of(val + " Video Uplaoded");
  }
}
