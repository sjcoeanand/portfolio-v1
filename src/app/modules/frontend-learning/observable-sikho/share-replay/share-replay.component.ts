import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, filter, map, shareReplay } from 'rxjs';
import { ObserverServiceService } from 'src/app/services/ObserverServiceService';

@Component({
  selector: 'app-share-replay',
  templateUrl: './share-replay.component.html',
  styleUrls: ['./share-replay.component.scss']
})
export class ShareReplayComponent {
  constructor(private router : Router, private servInst: ObserverServiceService, private httpClient : HttpClient){}
  redirectToObservable(){
    this.router.navigateByUrl('learning/observable-sikho')
  }

  allProducts : Observable<any> = new Observable<any>
  mobileProducts : Observable<any>  = new Observable<any>;
  laptopProducts : Observable<any>  = new Observable<any>;
  apiUrl = 'https://dummyjson.com/products';
  ngOnInit(): void {
    this.allProducts = this.httpClient.get(this.apiUrl).pipe(shareReplay());  
    
    this.mobileProducts = this.allProducts.pipe(map(x=> x.products.filter((x1:any) => {
      return x1.category == 'smartphones'
    })))
    this.laptopProducts = this.allProducts.pipe(map(x=> x.products.filter((x2:any)=> {
      return x2.category == 'laptops'
    })))
  }
}
