import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ObserverServiceService } from 'src/app/services/ObserverServiceService';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss']
})
export class ReplaySubjectComponent {
  constructor(private router : Router, private servInst: ObserverServiceService){}
  redirectToObservable(){
    this.router.navigateByUrl('learning/observable-sikho')
  }
  tweetsByElon:any[] = [];
  @ViewChild('stringInp') stringInp !: ElementRef;
  addTweet(item:any){
    if(item.value){
      this.tweetsByElon.push(item.value)
    }
    this.servInst.customReplaySubject.next(item.value)
    this.stringInp.nativeElement.value = "";
  }

  subscribeStatus1:boolean = false;
  subscribeStatus2:boolean = false;
  tweetsbyElonforUser1:any[] = [];
  tweetsbyElonforUser2:any[] = [];
  custSubscriptUser1 !: Subscription;
  custSubscriptUser2 !: Subscription;
  subUnSubscribe1(){
    this.subscribeStatus1 = !this.subscribeStatus1;
    if(this.subscribeStatus1){
      this.custSubscriptUser1 =  this.servInst.customReplaySubject.subscribe((res)=> {
        this.tweetsbyElonforUser1.push(res)
      })
    } else {
      this.custSubscriptUser1.unsubscribe()
    }
  }
  subUnSubscribe2(){
    this.subscribeStatus2 = !this.subscribeStatus2;
    if(this.subscribeStatus2){
      this.custSubscriptUser2 =  this.servInst.customReplaySubject.subscribe((res)=> {
        this.tweetsbyElonforUser2.push(res)
      })
    } else {
      this.custSubscriptUser2.unsubscribe()
    }
  }
}
