import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-frontend-learning',
  templateUrl: './frontend-learning.component.html',
  styleUrls: ['./frontend-learning.component.scss']
})
export class FrontendLearningComponent {
  
  accordionClicked:boolean = false;
  url: string = '/assets/dataSource/learning-data.json';
  learningData:any;
  pageOpened:any = window.location.pathname;
  accordionHeading:any; 
  private mySubscription!:Subscription;
  tablist:any[] = ['JavaScript', 'RxJs', 'DSA'];

  ngOnInit(): void {
    
    fetch(this.url)
    .then(res => res.json())
    .then(resp => { 
      this.learningData = resp.map((x:any) =>{
        if(x.name == 'Promises') {
         x['code'] = this.testPromiseData
        }
        if(x.name == 'Observables'){
          x['code'] = this.testObservableCode
        }
        if(x.name == 'Closures'){
          x['code'] = this.testClosures
        }
        if(x.name == 'Palindrome Number'){
          x['code'] = this.testDsaPalindrome
        }
        return x
      });    
      this.selectedTab('JavaScript')
    }); 
    
      
    // this is done for toast notification of learning page landing
    this.accordionClicked = true;
    setTimeout(() => {
      this.accordionClicked = false;
    }, 2000);


  }

  ngOnDestroy(): void {
    this.mySubscription ? this.mySubscription.unsubscribe() : '';
  }
  
  // toast handlers
  getToast(item:any, name:string){
    let expanded = item.target.ariaExpanded;
    if(expanded == 'true'){
      this.accordionClicked = true;
      this.accordionHeading = name;
      setTimeout(() => {
        this.accordionClicked = false;
      }, 2000);
      if(name == 'Promises'){
        this.callPromises()
      }
      if(name == 'Observables'){
        this.callObservables()
      }
    } else{
      this.accordionClicked = false;
    }
  }

  // learning example promise
  callPromises(){
    let promise1 = new Promise((resolve, reject)=>{
      console.log("promise created");
      if(this.pageOpened == '/learning'){
        setTimeout(() => {
          resolve('Promise Resolved1')
        }, 1000);
      } else{
        reject('Promise Rejected')
      }
    });
    promise1.then(res=>{
      console.log(res)
    }).catch(res=>{
      console.log(res)
    }).finally(()=> console.log('promise ended up with resolved or rejected'))
  }

  // learning example observables
  callObservables(){
    let obs1 = new Observable( declareParam => {
      console.log("observable created");    
      let counter = 0;
      setInterval(() => {
        counter = counter + 1;
        declareParam.next(counter)
      }, 1000);
    })
    this.mySubscription = obs1.subscribe( result => console.log('observable call', result))
  }

  closeToast(){
    this.accordionClicked = false;
  }


  // sample program syntax
  testPromiseData:any =  
  `let promise1 = new Promise(function(resolve, reject){
    if(path == '/learning'){
      resolve('Success')
    } else {
      reject('Failed')
    }
})

promise.then(function(resp){
  console.log(resp)
})
.catch(function(resp){
  console.log(resp)
})
.finally(()=> console.log('promise ended up with resolved or rejected'))
  `
    
  testObservableCode:any = `let obs1 = new Observable(resp => {
  let counter = 0;
  setTimeInterval(()=>{
    counter = counter + 1;
    resp.next(counter)
  }, 1000);
})
obs1.subscribe(data => console.log(data))

// in this scenario counter will keep running, hence you need to unsubscibe your obervable when component destroys
  `;

  testClosures = `function areaOfSq(length){
      return function(width){
        console.log('firstClosure'+length*width)
        return function addLenWidthNPie(pie){
          console.log('secondClosure'+(length+width+pie))
        }
      }
  }
  let closure1 = areaOfSq(2)
  let closure2 = closure1(3)
  closure2(5)
  //output
  firstClosure 6
  secondClosure 10`

  testDsaPalindrome = `  let isPalindrome = function(item) {
    return (item > 0) ? item === +item.toString().split('').reverse().join('') : false
  }
  let res = isPalindrome(121)
  console.log('res = ', res)
  //output: res =  true`
  
  filteredLearningData:any;
  selectedTab(item1:any){
    this.filteredLearningData = this.learningData.filter((x1 :any)=> {
      if(x1.tag == item1){
        return x1
      }
    })
  }

  palindromeNumber:any;
  palindromChecked:boolean = false;
  message:any = '';
  isPalindromeNumber:boolean = false;
  
  isPalindrome(item:number){
    this.palindromChecked = true;
    if(item > 0) {
      if(item === +item.toString().split('').reverse().join('')){        
        this.message =  `${item} is Palindrome Number`; 
      } else {
        this.message =  `${item} is not Palindrome Number`;
      }
    } else {
      this.palindromChecked = false;
      this.message = "Number should be greater than 0" 
    }
  }

}
