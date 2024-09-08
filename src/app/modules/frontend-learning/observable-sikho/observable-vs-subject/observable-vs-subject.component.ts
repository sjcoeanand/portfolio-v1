import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-vs-subject',
  templateUrl: './observable-vs-subject.component.html',
  styleUrls: ['./observable-vs-subject.component.scss']
})
export class ObservableVsSubjectComponent {
  observable1 = new Observable((obsrvr)=>{
      setTimeout(()=>{ obsrvr.next(1) }, 1000)
      setTimeout(()=>{ obsrvr.next(2) }, 2000)
      setTimeout(()=>{ obsrvr.error(new Error('Something went wrong')) }, 4000)
      setTimeout(()=>{ obsrvr.next(3) }, 3000)
  })

  ngOnInit(): void {
    this.observable1.subscribe({next : (res)=> {
      console.log(res)
    }, error : (error1)=>{
      console.log(error1.message)
    }})
  }
}


// https://js-wbtxeq.stackblitz.io/
// https://stackblitz.com/edit/angular-ivy-akyyqx?file=src%2Fapp%2Fapi.service.ts
