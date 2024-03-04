import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchDataService {  
  constructor(private http: HttpClient){}
  url: string = 'https://my-json-server.typicode.com/Uxtrendz/apis/videoList';

  fetchSearchData(req:any):Observable<any>{
    return this.http.get(this.url+'?q='+req)
  }
}
