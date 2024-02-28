import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ObserverServiceService } from 'src/app/services/ObserverServiceService';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.scss']
})
export class AsyncSubjectComponent {
  
  @ViewChild('stringInp') stringInp !: ElementRef;

  constructor(private router : Router, private servInst: ObserverServiceService){}
  redirectToObservable(){
    this.router.navigateByUrl('learning/observable-sikho')
  }

  latestValueByAsyncSubject : any;
  ngOnInit(): void {
    this.servInst.customAsyncSubject.subscribe(res => {      
      this.latestValueByAsyncSubject = res;
    })
  }
  addTweet(ele:any){
    console.log("we", ele.value);
    if(ele.value){
      this.servInst.customAsyncSubject.next(ele.value);
    }
    this.stringInp.nativeElement.value = '';
  }

  completeSubscriptions(){
    this.servInst.customAsyncSubject.complete()
  }
}
