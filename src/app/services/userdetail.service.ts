import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface LoginData {
  EmailId:string,
  Password: string
}
export interface SignUpData {
  userId: string,
  fullName:string
  emailId:string,
  password: string
}

@Injectable({
  providedIn: 'root'
})

export class UserdetailService {

  constructor(private http: HttpClient) {}

  login(loginData:LoginData):Observable<any>{
    return this.http.post('https://projectapi.gerasim.in/api/UserApp/login', loginData)
  }

  signup(newUSer:SignUpData):Observable<any>{
    return this.http.post('https://projectapi.gerasim.in/api/UserApp/CreateNewUser', newUSer)
  }
  
  getAllUsers(){
    return this.http.get('https://projectapi.gerasim.in/api/UserApp/GetAllUsers')
  }
}
