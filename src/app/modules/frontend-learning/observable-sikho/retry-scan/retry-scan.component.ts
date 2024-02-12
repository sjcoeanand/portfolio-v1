import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { delay, fromEvent, retry, retryWhen } from 'rxjs';

@Component({
  selector: 'app-retry-scan',
  templateUrl: './retry-scan.component.html',
  styleUrls: ['./retry-scan.component.scss']
})
export class RetryScanComponent {
  constructor(private router : Router, private http : HttpClient){}
  status:any = 'No Data';
  ngOnInit(): void {
    // delay
    const clicks = fromEvent(document, 'click');
    const delayedClicks = clicks.pipe(delay(2000)); // each click emitted after 1 second
    delayedClicks.subscribe(x => console.log(x));

  }
  redirectToObservable(){
    this.router.navigateByUrl('learning/observable-sikho')
  }
  userData:any;
  fetchingData:boolean = false;
  fetchUserData(){
    this.fetchingData = true;
    this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
      retry(3)      
    
      ).subscribe({
      next: (res:any) => {
        this.status = 'Data Loaded'
        this.fetchingData = false;
        this.userData = res?.filter((x:any) => x.id <= 3);
      },
      error : (err)=>{
        this.status = 'Problem Fetching data';
        this.fetchingData = false;
      }
    })
  }
}
