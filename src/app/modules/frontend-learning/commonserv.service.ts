import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonservService {

  constructor(private httpInstance : HttpClient) { }
  
  obsSub1 = new Subject();

  fetchService(){ 
      
  }
}
