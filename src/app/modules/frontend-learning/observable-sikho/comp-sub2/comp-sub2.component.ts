import { Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, map } from 'rxjs';
import { ObserverServiceService } from 'src/app/services/ObserverServiceService';

@Component({
  selector: 'app-comp-sub2',
  templateUrl: './comp-sub2.component.html',
  styleUrls: ['./comp-sub2.component.scss']
})
export class CompSub2Component {
  enteredString:any = 'Default String 2';
  constructor(private servInst : ObserverServiceService){
    this.servInst.custSubjectOutput.subscribe(res=> {
      this.enteredString = res;
    })
  }
  @ViewChild ('stringInp') stringInp !: ElementRef;
  
  updateSubject(item:any){
    this.servInst.custSubjectOutput.next(item.value)
  }
}
