import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, interval, timer } from 'rxjs';
import { ObserverServiceService } from 'src/app/services/observer-service.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent {
  constructor(private router : Router, private serviceInstance: ObserverServiceService){}
  redirectToObservable(){
    this.router.navigateByUrl('learning/observable-sikho')
  }
  streamMessage:any = 0;
  streamSubscription !:Subscription;
  streamSubscriptionTimer !: Subscription;
  ngOnInit(): void {
    // Note : streamInterval = interval(interval)
    let streamInterval = interval(500);
    this.streamSubscription = streamInterval.subscribe((res:any)=> {
      this.serviceInstance.printStream(res, "streamContainer1");
      this.serviceInstance.printStream(res, "streamContainer2");
      if(res > 4){
        this.streamSubscription.unsubscribe();
      }
    })
    
    // Note : streamTimer = timer(delay, interval);
    let streamTimer = timer(3000, 300)
    this.streamSubscriptionTimer = streamTimer.subscribe((res)=>{
      this.serviceInstance.printStream(res, "streamContainer3");
      if(res > 4){
        this.streamSubscriptionTimer.unsubscribe();
      }
    })
  }

  ngOnDestroy(): void {
    this.streamSubscription.unsubscribe();
    this.streamSubscriptionTimer.unsubscribe();
  }
}
