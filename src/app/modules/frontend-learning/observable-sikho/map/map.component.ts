import { Subscription, from, interval, map, subscribeOn, toArray } from 'rxjs';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ObserverServiceService } from 'src/app/services/ObserverServiceService';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  constructor(private router : Router, private serviceInstance: ObserverServiceService){}
  redirectToObservable(){
    this.router.navigateByUrl('learning/observable-sikho')
  }
  msg1:any;
  msg2:any;
  msg3:any;
  msg4:any;
  obsSubscribe1 !: Subscription;
  obsSubscribe2 !: Subscription;
  obsSubscribe3 !: Subscription;
  obsSubscribe4 !: Subscription;
  
  ngOnInit(): void {
    const obs1 = interval(1000)
    this.obsSubscribe1 = obs1.pipe(
      map((x)=>{
        return 'Data with Interval ' + x        
      })
    )
    .subscribe({
      next:(res)=>{
        this.msg1 = res      
      }
    })

    const obs2 = interval(1000)
    this.obsSubscribe2 = obs2.pipe(
      map((x)=>{
        return 'Data with Interval ' + (x*10)        
      })
    )
    .subscribe({
      next:(res)=>{
        this.msg2 = res      
      }
    })

    const employees = [
      {
        name : 'Anand',
        role : 'Frontend Dev'
      },
      {
        name : 'Abhishek',
        role : 'Dotnet Dev'
      },
      {
        name : 'Ajinkya',
        role : 'Data Analyst'
      },
    ]
    let nestedEmployees = [
      {
        name : 'Anand',
        role : 'Frontend Dev',
        experience : {
          skill : 'Angular',
          duration : '4.5 years'
        }
      },
      {
        name : 'Abhishek',
        role : 'Dotnet Dev',
        experience : {
          skill : 'dot net',
          duration : '8 years'
        }
      },
      {
        name : 'Ajinkya',
        role : 'Export Import Manager',
        experience : {
          skill : 'Accounting',
          duration : '10 years'
        }
      },
      {
        name : 'Ajit',
        role : 'Banker',
        experience : {
          skill : 'ca',
          duration : '10 years'
        }
      }
    ]
    
    const obs3 = from(employees);
     this.obsSubscribe3 =  obs3.pipe(
        map(x=> x.name)
      ).subscribe({next : (res)=>{
        this.serviceInstance.printStream(res, 'custObs1')
      }})

    setTimeout(() => {
       this.obsSubscribe1.unsubscribe(); 
       this.obsSubscribe2.unsubscribe(); 
       this.obsSubscribe3.unsubscribe(); 
       this.obsSubscribe4.unsubscribe(); 
    }, 8000);
  
  // pluk exaple
  const obs4 = from(nestedEmployees);
  this.obsSubscribe4 =  obs4.pipe(
    // pluk('experience', 'skill') now depricated
   ).subscribe({next : (res)=>{
     this.msg3 = res;
     console.log('msg3 ', this.msg3);
   }})

  }
}
