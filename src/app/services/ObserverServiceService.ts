import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { AsyncSubject, Observable, ReplaySubject, Subject, delay, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ObserverServiceService {

  constructor(private httpClient: HttpClient){}
  url: string = '/assets/dataSource/learning-data.json';
  // creatting list for ul common method (+)
  printStream(val: any, containerId: string) {
    let el = document.createElement('li');
    el.innerText = val;
    document.getElementById(containerId)?.appendChild(el) as HTMLElement;
  }
  // creatting list for ul common method (-)


  printRoudedDivs(val: any, containerId: string) {
    let el = document.createElement('div');
    el.innerText = val;
    document.getElementById(containerId)?.appendChild(el) as HTMLElement;
  }
  // subject and behaviour subject (+)
  custSubjectBadge = new Subject<boolean>();
  custSubjectOutput = new Subject();
  // custSubjectOutput = new BehaviorSubject('This is Behaviour subject Title');

  // subject and behaviour subject (-)


  // Replay Subject (+)
  customReplaySubject = new ReplaySubject(2)
  // Replay Subject (-)

  // asynch Subject (+)
  customAsyncSubject = new AsyncSubject()
  // asynch Subject (-)

  fetchFrontendData(){
    return this.httpClient.get<any[]>(this.url);
  }
}
