import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, from, fromEvent, map, tap } from 'rxjs';
@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.scss']
})
export class DebounceTimeComponent {
  transformedData:any;
  transformedData1:any;
  constructor(private router : Router){}
  redirectToObservable(){
    this.router.navigateByUrl('learning/observable-sikho')
  }

  @ViewChild('debncInput1') debncInput1 !: ElementRef;
  @ViewChild('debncInput2') debncInp2 !: ElementRef;

  ngAfterViewInit(): void {
    // debounce only
    let testIp1 =  this.debncInput1.nativeElement as HTMLInputElement;
    const obs1 = fromEvent<any>(testIp1, 'keyup');
    obs1.pipe(
      map(ip => ip.target.value),
        debounceTime(1000)
    ).subscribe({
      next : (res)=> {
        console.log("res", res);
        this.transformedData = res;
      }
  })


    // debounce with distinctUntill
    let testIp2 = this.debncInp2.nativeElement as HTMLInputElement;
    let obs2 = fromEvent<any>(testIp2, 'keyup');
    obs2.pipe(
      map(x=> x.target.value),
      debounceTime(2000),
      distinctUntilChanged()
    )
    .subscribe(res => {
      console.log('==2', res)
      this.transformedData1 = res;
    })

  }
}
