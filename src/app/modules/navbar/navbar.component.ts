import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { ObserverServiceService } from 'src/app/services/ObserverServiceService';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private router: Router, private servInst: ObserverServiceService){}
  showOnSubjectPage:boolean = false;
  pageOpened:any = window.location.pathname;
  ngOnInit(): void {    
    console.log("pageOpened", this.pageOpened);
    this.servInst.custSubjectBadge.subscribe(res => {
      this.showOnSubjectPage = res
    })
    if(this.pageOpened == "/learning"){
      this.active1 = true
    } else {
      this.active1 = false;
      this.active2 = false;
    }
  }
  
  active1:boolean = false;
  active2:boolean = false;
  active0:boolean = true;
  clickEvent(value:any){
    //if you just want to toggle the class; change toggle variable.
    if(value == '0'){
      this.active0 = true;
      this.active1 = false;
      this.active2 = false;
      this.router.navigateByUrl('/')
    }          
    if(value == '1'){
      this.active1 = true;
      this.active2 = false;
      this.router.navigateByUrl('/learning')
    }  
    if(value == '2'){
      this.active2 = true;
      this.active1 = false;
    }
 }
}
