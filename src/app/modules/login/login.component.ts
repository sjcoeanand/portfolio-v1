import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserdetailService } from 'src/app/services/userdetail.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private userService:UserdetailService, private route: Router){}
  login(id:string, pswd:string){
    let loginData = {
      "EmailId": id,
      "Password": pswd
    }
    this.userService.login(loginData).subscribe((res:any) => {
      console.log('login service called', res); 
        if(res.result){
          alert(res.message)
          localStorage.setItem('loginToken', res.data.token);
          this.route.navigateByUrl('getAllUsers')
        } else {
          alert(res.message)
        }
    })
  }
}
