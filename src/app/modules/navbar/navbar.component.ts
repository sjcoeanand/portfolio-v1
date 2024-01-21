import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  active1:boolean = false;
  active2:boolean = false;
  active0:boolean = true;
  clickEvent(value:any){
    //if you just want to toggle the class; change toggle variable.
    if(value == '0'){
      this.active0 = true;
      this.active1 = false;
    }      
        
    if(value == '1'){
      this.active1 = true;
    }  
 }
}
