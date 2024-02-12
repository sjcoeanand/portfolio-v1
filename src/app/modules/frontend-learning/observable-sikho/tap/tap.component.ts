import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, interval, map, tap } from 'rxjs';
import { ObserverServiceService } from 'src/app/services/observer-service.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent {
  constructor(private router : Router, private serv : ObserverServiceService){}
  redirectToObservable(){
    this.router.navigateByUrl('learning/observable-sikho')
  }
  sampleData:any[] = [];
  obsSubscript1 !: Subscription;
  obsSubscript2 !: Subscription;
  msg1:any = '';
  colorCode:any;
  ngOnInit(): void {

    const colorArray =  [
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

    this.msg1 = 'Loading Data ...'
    const obs1 = interval(1000);
    this.obsSubscript1 = obs1.pipe(
      tap( y => {
        if(y >=4 ){
          this.obsSubscript1.unsubscribe(); 
        }
      }),
      map(x => 'Good Job Done ' + x)
    ).subscribe(res => {
      let val = `Result -  ${res}`
      this.serv.printStream(val, 'id1')
    })

    this.obsSubscript2 = obs1.pipe(
      tap(res => {
        this.colorCode = colorArray[res];
        if(res >= 8){
          this.obsSubscript2.unsubscribe();
        }
      }),
      map(res => 'Border Color - ' + colorArray[res])
    ).subscribe( res => {      
      this.msg1 = res
    })
  }
}
