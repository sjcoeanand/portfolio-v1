import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ObserverServiceService } from 'src/app/services/observer-service.service';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.scss']
})
export class CustomObservableComponent {  
  constructor( private router : Router, private serviceInstance: ObserverServiceService){ }
  redirectToObservable(){
    this.router.navigateByUrl('learning/observable-sikho')
  }
  
  obsStatus1:any;
  obsStatus2:any;
  intervalSubscribe !: Subscription;
  
  ngOnInit(): void {
    // ex 1
    const customObservable = new Observable((obs:any) => {
      setTimeout(() => {
        obs.next('Custom Obs 1')
      }, 1000);
      setTimeout(() => {
        obs.next('Custom Obs 2')
      }, 2000);
      setTimeout(() => {
        obs.next('Custom Obs 3')
      }, 3000);
      setTimeout(() => {
        obs.next('Custom Obs 4')
        // obs.error('Error')
      }, 4000);
      setTimeout(() => {
        obs.next('Custom Obs 5')
        obs.complete()
      }, 5000);
    })

    customObservable.subscribe({
      next : res => {
        this.serviceInstance.printStream(res, 'custObs1')
      },
      error : (err)=>{
        this.obsStatus1 = 'failed';
      },
      complete : ()=>{
        this.obsStatus1 = 'success';
      }
    })


    let count = 0
    const autoIntervalObservable = new Observable((obs1)=>{
      setInterval(()=>{
        count++
        obs1.next(`Anand ${count}`)
        if(count > 4){
          obs1.error()
          // obs1.complete()
        }
      }, 2000)
      
    })
    
    // ex 2
    this.intervalSubscribe = autoIntervalObservable.subscribe({
      next: (res)=>{
        this.serviceInstance.printStream(res, 'custObs2')
      },
      error: (error)=>{
        this.obsStatus2 = 'failed';
      },
      complete:()=>{
        this.obsStatus2 = 'success';

      }
    })
    
    // ex 3
    let empArray = ['Anand', 'Amol', 'Ashish', 'Abhishek', 'Ajinkya', 'Ajit']
    const obs3 = new Observable((res)=> {
      let count = 0;
      setInterval(()=>{
        res.next(empArray[count])
        if(count >= 3){
          res.complete()
        }
        count++;
      }, 1000)
    })

    obs3.subscribe({
      next: (res)=>{
        this.status = 'running';
        this.randomName = res
      },
      error: (err)=>{
        this.status = 'failed';
        console.log("error", err);
      },
      complete: ()=>{
        this.status = 'success';
        console.log("complete");
        
      }
    })
  }
  randomName:any;
  status:any;
}
