import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, from, of } from 'rxjs';
import { ObserverServiceService } from 'src/app/services/ObserverServiceService';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent {
    constructor(private serviceInstance: ObserverServiceService, private router : Router){ }
    ofObjectData:any;
    ngOnInit() {

      //  of examples (+)
      let observableOf1 = of('Narendra', 'Amit', 'Rahul');
      observableOf1.subscribe(res => { 
        this.serviceInstance.printStream(res, 'streamContainer1')
      })
      let sampleObj = {name1: 'Narendra', name2: 'Amit', name3: 'Rahul'}
      let observableOf2= of(sampleObj);
      observableOf2.subscribe(res => { 
        this.ofObjectData = res;
      })
      //  of examples (-)
      //  from examples (+)
      let observablefrom1 = from(['User1', 'User2', 'User3'])
      observablefrom1.subscribe(res => {
        this.serviceInstance.printStream(res, 'streamContainer2')
      })

      let promise1 = new Promise((resolve)=>{
        setTimeout(() => {
          resolve('Promise Resolved')
        }, 3000);
      })

      // promise1.then(res => console.log('then => ',res))

      let observablefrom2 = from(promise1);
      observablefrom2.subscribe(res => {
        console.log('from promise', res)
        this.serviceInstance.printStream(res, 'streamContainer3')
      })

      let observablefrom3 = from('Welcome Geeks');
      observablefrom3.subscribe(res => {
        this.serviceInstance.printStream(res, 'streamContainer4')
      })
      //  from examples (-)
    }
    
    redirectToObservable(){
      this.router.navigateByUrl('learning/observable-sikho')
    }
}
