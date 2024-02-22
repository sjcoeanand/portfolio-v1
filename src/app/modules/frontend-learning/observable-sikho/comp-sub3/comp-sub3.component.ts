import { Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, map } from 'rxjs';
import { ObserverServiceService } from 'src/app/services/ObserverServiceService';

@Component({
  selector: 'app-comp-sub3',
  templateUrl: './comp-sub3.component.html',
  styleUrls: ['./comp-sub3.component.scss']
})
export class CompSub3Component {
  enteredString:any = 'Default String 3';
  @ViewChild ('stringInp') stringInp !: ElementRef
  
  constructor(private servInst : ObserverServiceService){
    this.servInst.custSubjectOutput.subscribe(res=> {
      this.enteredString = res;
    })
  }

  updateSubject(item:any){
    this.servInst.custSubjectOutput.next(item.value)
  }
}
