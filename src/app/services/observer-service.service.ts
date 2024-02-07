import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObserverServiceService {

  constructor() { }
  printStream(val:any, containerId:string){
    let el = document.createElement('li');
    el.innerText = val;
    document.getElementById(containerId)?.appendChild(el) as HTMLElement;
  }
}
