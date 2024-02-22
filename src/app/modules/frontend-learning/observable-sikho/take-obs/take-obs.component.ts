import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent, interval, range, timer } from 'rxjs';
import { take, takeLast, takeUntil, toArray} from 'rxjs/operators';
import { ObserverServiceService } from 'src/app/services/ObserverServiceService';

@Component({
  selector: 'app-take-obs',
  templateUrl: './take-obs.component.html',
  styleUrls: ['./take-obs.component.scss']
})
export class TakeObsComponent {
  constructor(private router : Router, private serv : ObserverServiceService){}
  redirectToObservable(){
    this.router.navigateByUrl('learning/observable-sikho')
  }

  countryList:any = [];
  ngOnInit(): void {
    this.countryList = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Barbuda"];
    // take(4)
    const obsvable1 = interval(1000);
    obsvable1.pipe(
      take(4)
    ).subscribe(res => {
      this.serv.printStream(this.countryList[res], 'countryList1')
    })

    // takeLast(3)
    let obs = range(1, 100).pipe(takeLast(3));
    obs.subscribe(val => {
      this.serv.printStream(val, 'countryList2')
    });

    // takeUntil(4)
    let condition1 = timer(5000);
    let condition2 = fromEvent(document, 'click');
    const obsvable2 = interval(1000);
    obsvable2.pipe(takeUntil(condition1)).subscribe(res => {
      let sample = `Result ${res}`;
      this.serv.printStream(sample, 'countryList3')
    })

  }
}
