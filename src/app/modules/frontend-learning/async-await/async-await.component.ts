import { Component } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-async-await',
  templateUrl: './async-await.component.html',
  styleUrls: ['./async-await.component.scss']
})
export class AsyncAwaitComponent {
  constructor(private router : Router){}
  dataFetchedWithPromise:any;
  dataFetchedWithAsync:any;
  dataFetchedWithFetch:any;

  dellData = {
    brand : 'Dell',
    color: 'Grey',
    ram: '8GB',
    rom: '1TB',
    count:3,
    status : 'Success'
  }
  hpData = {
    brand : 'HP',
    color: 'Black',
    ram: '16GB',
    rom: '2TB',
    count:10,
    status : 'Success'
  }
  noData = [
    {
      brand : 'Macbook',
      count:0,
    },
    {
      brand : 'Samsung',
      count:0,
    },
    {
      brand : 'Asus',
      count:0,
    }
  ]

  promiseSample(item:any){
    return new Promise((resolve, reject)=>{
      if(item == 'dell'){
        setTimeout(() => {
          resolve(this.dellData)
        }, 2000);
      } else if(item == 'hp'){
        setTimeout(() => {
          resolve(this.hpData)
        }, 2000);
      } else {
        setTimeout(() => {
          reject(this.noData)
        }, 2000);
      }
    })
  }

  async fetchWithPromise(type:any, item:any){
    if(type == 'promise'){      
      this.dataFetchedWithPromise = 'Fetching Data ....'; 
      this.promiseSample(item).then(res => {
        this.dataFetchedWithPromise = res
      }).catch(res => this.dataFetchedWithPromise = res)
    }
    if(type == 'asyncAwait'){
      this.dataFetchedWithAsync = 'Fetching Data ....';    
      try {
        let data = await this.promiseSample(item);
        this.dataFetchedWithAsync = data;   
      } catch (error) {
        this.dataFetchedWithAsync = error;
      }
    }
    if(type == 'fetch'){
      this.dataFetchedWithFetch = 'Fetching Data ...';    
      this.dataFetchedWithFetch = await this.fetchMethod().then(res => res)
    }
  }

  fetchMethod(){
    return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
  }

  redirectToLearning(){
    this.router.navigateByUrl('learning')
  }
}
