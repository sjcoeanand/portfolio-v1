import { Component, ElementRef, ViewChild } from '@angular/core';
import { Subscription, fromEvent, map } from 'rxjs';
import { ObserverServiceService } from 'src/app/services/ObserverServiceService';

@Component({
  selector: 'app-comp-sub1',
  templateUrl: './comp-sub1.component.html',
  styleUrls: ['./comp-sub1.component.scss']
})
export class CompSub1Component {
  sampleSubscript!:Subscription;
  constructor(private servInst : ObserverServiceService){
   this.sampleSubscript = this.servInst.custSubjectOutput.subscribe(res=> {
      this.enteredString = res;
    })
  }
  enteredString:any = 'Default String 1';
  @ViewChild ('stringInp') stringInp !: ElementRef
  
  updateSubject(val:any){
    this.servInst.custSubjectOutput.next(val.value);
  }
  ngOnDestroy(): void {
    this.sampleSubscript.unsubscribe();
  }
}
