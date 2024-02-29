import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ObserverServiceService } from 'src/app/services/ObserverServiceService';


@Component({
  selector: 'app-frontend-learning',
  templateUrl: './frontend-learning.component.html',
  styleUrls: ['./frontend-learning.component.scss']
})
export class FrontendLearningComponent {
  
  accordionClicked:boolean = false;
  learningData:any;
  pageOpened:any = window.location.pathname;
  accordionHeading:any; 
  private mySubscription!:Subscription;
  tablist:any[] = ['JavaScript', 'RxJs', 'DSA', 'Angular'];

  constructor(private servInst : ObserverServiceService){}
  ngOnInit(): void {
    
    this.servInst.fetchFrontendData().subscribe((resp)=>{
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
        if(x.name == 'Unique Character String'){
          x['code'] = this.testFirstUniqChar
        }
        if(x.name == 'Fibonacci series'){
          x['code'] = this.testFibonacci
        }
        if(x.name == 'Recursion'){
          x['code'] = this.testRecurssion
        }
        if(x.name == 'Anagram'){
          x['code'] = this.testAnagram
        }
        if(x.name == 'Two Sum (Brute force solution)'){
          x['code'] = this.testTwoSum
        }
        if(x.name == 'Best Time to Buy and Sell Stock'){
          x['code'] = this.testBestTimeTobuyStock
        }
        if(x.name == 'Find Single missing number from given numbers in array'){
          x['code'] = this.testMissingSingleNumberFromArray
        }
        return x
      });    
      this.selectedTab('JavaScript')
    })
      
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

  testFirstUniqChar = `const uniqArray = function(str){
      let obj = {};
      for(let i = 0; i <str.length; i++){
          !obj[str[i]] ? obj[str[i]] = 1 : obj[str[i]]++
      }
      console.log('count of all chars ', obj);
      for(let key of Object.keys(obj)){
          if(obj[key] === 1){
              console.log('uniq = ', str.indexOf(key))
              return str.indexOf(key);
          }
      }
      return -1
  }
  uniqArray('anandshendage')
  // output : 
  count of all chars  { a: 3, n: 3, d: 2, s: 1, h: 1, e: 2, g: 1 }
  uniq =  5`;

  testFibonacci = `
  function fib(n){
      let defaultFib = [0,1];
      for(let i = 2; i <= n ; i++){
          defaultFib.push(defaultFib[i-1] + defaultFib[i-2])
      }
      console.log(defaultFib);
      console.log(defaultFib[n]);
      return defaultFib[n]
  }
  fib(5)
  //output : 
  [ 0, 1, 1, 2, 3, 5 ]
  5
  `
  testRecurssion = `
  function recusrionfunc(n){
    if(n <= 1) return n; // default we can consider fibonacci 0 and 1st element
    return recusrionfunc(n-1) + recusrionfunc(n-2) //fibonacci formula F(n-1)+F(n-2)
  }
  console.log(recusrionfunc(3))
  //output: 2
  `
  
  testAnagram = `
    //for two single string input
    function anagramFunc(sourceStr, targetStr){
      return sourceStr.split('').sort().join('') === targetStr.split('').sort('').join('')
    }

    //group anagram words for array of strings/ words
    let strArr = ['anand', 'danan', 'safe', 'fase', 'tea', 'eat', 'ate']
    function groupAnagrams(strArr){
      let outputObj = {};
      for(let val of strArr){
        let sortedValue = val.split('').sort().join('')
        if(outputObj[sortedValue]){
          outputObj[sortedValue].push(val)
        } else {
          outputObj[sortedValue] = [val]
        }
      }
      return Object.values(outputObj)
    }
    groupAnagrams(strArr)

    //output: [
      ["anand","danan"],
      ["safe","fase"],
      ["tea","eat","ate"]
  ] 
  `;

  testTwoSum = `
  let arr=[2,3,5,7,1] target = 8
  function twoSum(arr, target){
    for(let i=0; i<arr.length; i++){
      for(let j=i+1; j<arr.length; j++){
        if(arr[i]+arr[j] === target){
          return [i, j]
        }
      }
    }
  }
  twoSum(arr, target)
  // output: [1,2]
  `

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

  // fibonacci method
  positionOfFibonacci:number = 0;
  findFibonacciNumberSeriesTillPosition:any[] = [];
  findFibonacciNumberAtPosition:any = '';
  findFibonacciNumber(position: number){
    let defaultFibSeries = [0,1];
    for(let i = 2; i <= position ; i ++){
      defaultFibSeries.push(defaultFibSeries[i - 1] + defaultFibSeries[i - 2])
    }
    this.findFibonacciNumberSeriesTillPosition = defaultFibSeries;
    this.findFibonacciNumberAtPosition = defaultFibSeries[position];
  }

  // anagram method
  anagramSource:any;
  anagramDestination:any;
  isAnagramResult:boolean = false;
  submit:boolean = false;
  valueChanges(e:any){
    console.log('e =?',e );    
    this.submit = false;
  }
  isAnagram(s:any, t:any){
     this.submit = true;
     this.isAnagramResult = (typeof(s) || typeof(t)) == 'number' ? (s.split('').sort().join('') === t.split('').sort().join('')) : (s.toLowerCase().split('').sort().join('') === t.toLowerCase().split('').sort().join(''));
     return this.isAnagramResult
  }


  testBestTimeTobuyStock = `
  let maxProfit =  function(prices){
    let overAllProfit = 0;
    for(let i=0; i<prices.length-1; i++){
      for(let j=i+1; j<prices.length; j++){
          let currentProfit = prices[j]-prices[i]
        if(currentProfit > overAllProfit) overAllProfit = currentProfit
      }
    }
    console.log("maxProfit = ", overAllProfit);
    return overAllProfit
  }

  maxProfit([7,1,5,3,6,4])
  maxProfit([7,6,4,3,1])

  //output: 
  maxProfit =  5
  maxProfit =  0
  `

  testMissingSingleNumberFromArray = `
  function missingArrayItem(sampleArray){
    let n = sampleArray.length + 1;

    // main formula
    let sumOffFirstN = (n*(n+1))/2;

    let sumOfArray = 0;
    for(let i=0; i<n-1; i++){
      sumOfArray = sumOfArray + sampleArray[i]
    }
    let result = sumOffFirstN - sumOfArray
    return result
  }
  missingArrayItem([2,5,6,1,3])
  // output : 4
  `;
}
