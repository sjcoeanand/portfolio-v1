import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, forkJoin, map, of } from 'rxjs';

type User = {
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
  address: any;
  company: any;
};
@Component({
  selector: 'app-fork-join',
  templateUrl: './fork-join.component.html',
  styleUrls: ['./fork-join.component.scss']
})
export class ForkJoinComponent {
  constructor(private router : Router, private http: HttpClient){}
  
  redirectToObservable(){
    this.router.navigateByUrl('learning/observable-sikho')
  }

  sources: Observable<User>[] = [
    this.http.get<User>('https://jsonplaceholder.typicode.com/users/1'),
    this.http.get<User>('https://jsonplaceholder.typicode.com/users/2'),
    this.http.get<User>('https://jsonplaceholder.typicode.com/users/3'),
  ];
  sourceData:any;
  ngOnInit(): void {
    this.testFork()
  }
  testFork(){
    forkJoin(this.sources)
      .pipe(
        map(([userOne, userTwo, userThree]) => ({
          userOne: { ...userOne, name: 'Lorenzo' },
          userTwo,
          userThree,
        })),
        catchError((error) => of({ error }))
      )
      .subscribe(res => {
        setTimeout(() => {
          this.sourceData = res;
        }, 2000);
      });
  }
}
