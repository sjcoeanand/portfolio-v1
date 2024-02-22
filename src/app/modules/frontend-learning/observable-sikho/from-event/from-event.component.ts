import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import { ObserverServiceService } from 'src/app/services/ObserverServiceService';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent {
  constructor(private router : Router, private serviceInstance: ObserverServiceService){}
  redirectToObservable(){
    this.router.navigateByUrl('learning/observable-sikho')
  }
  @ViewChild('fromEventBtn') fromEventBtn !: ElementRef;
  ngAfterViewInit(): void {
    let counter = 1;
      fromEvent(this.fromEventBtn.nativeElement, 'click').subscribe(res => {
        let val = `${counter++}`;
        this.serviceInstance.printStream(val, 'streamContainer1')
        this.serviceInstance.printStream(val, 'streamContainer2')
      }
    )  
  }
  
}
