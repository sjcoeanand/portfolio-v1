import { SignUpData } from './../../services/userdetail.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserdetailService } from 'src/app/services/userdetail.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  name:string = '';
  email:string = '';
  password:string = '';

  constructor(private servInstance: UserdetailService, private route: Router){}
  saveUSer(){
    let randomUserID = Math.floor(Math.random() *10)
    let newUSer:SignUpData = {
      userId: String(randomUserID),
      fullName: this.name,
      emailId: this.email,
      password: this.password
    }
    this.servInstance.signup(newUSer).subscribe((res:any)=>{
      console.log('signup service called', res);  
      if(res?.result){
        alert(res.message)
        this.route.navigateByUrl('/login');
      } else {
        alert(res.message)
      }
    })
  }
}
