import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { concatMap, delay, from, map, mergeMap, of, switchAll, switchMap } from 'rxjs';
import { ObserverServiceService } from 'src/app/services/ObserverServiceService';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent {
  constructor(private router : Router, private servInst: ObserverServiceService){}
  redirectToObservable(){
    this.router.navigateByUrl('learning/observable-sikho')
  }

  ngOnInit(): void {
    const sampleFromObs = from(['Rest Api', 'Html', 'CSS', 'SCSS'])

    // only mergeMap
    sampleFromObs.pipe(
      mergeMap(x => this.transformValue(x))
      ).subscribe(res => {
      this.servInst.printStream(res, 'custObsMap1')
    })

    //concatMap all
    sampleFromObs.pipe(
      concatMap(x => this.transformValue(x))
      ).subscribe(res => {
      this.servInst.printStream(res, 'custObsMap2')
    })

    // switchMap
    sampleFromObs.pipe(
      switchMap(res => this.transformValue(res))
      ).subscribe(res => {
      this.servInst.printStream(res, 'custObsMap3')
    })
  }

  transformValue(item:any){
    return of(item).pipe(delay(2000))
  }
}
