import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export class dynamicTableService{
    constructor(private http: HttpClient){}
    fetchUserData():Observable<any>{
        return this.http.get('https://jsonplaceholder.typicode.com/users')
    }
}