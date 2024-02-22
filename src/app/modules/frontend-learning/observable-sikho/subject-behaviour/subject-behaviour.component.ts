import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ObserverServiceService } from 'src/app/services/ObserverServiceService';

@Component({
  selector: 'app-subject-behaviour',
  templateUrl: './subject-behaviour.component.html',
  styleUrls: ['./subject-behaviour.component.scss']
})
export class SubjectBehaviourComponent {
  constructor(private router : Router, private servInst : ObserverServiceService){}
  redirectToObservable(){
    this.router.navigateByUrl('learning/observable-sikho')
  }
  sampleSubscript!:Subscription;
  dynamicTitle:any = 'Default Title';
  ngOnInit(): void {
    this.servInst.custSubjectBadge.next(true);
    this.sampleSubscript = this.servInst.custSubjectOutput.subscribe(res => {
      this.dynamicTitle = res;
    })
  }
  ngOnDestroy(): void {
    this.servInst.custSubjectBadge.next(false);
    this.sampleSubscript.unsubscribe();
  }
}
