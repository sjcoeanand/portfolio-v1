import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { of, scan } from 'rxjs';
import { ObserverServiceService } from 'src/app/services/observer-service.service';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss']
})
export class ScanComponent {

  constructor(private router : Router, private http : HttpClient, private servInst : ObserverServiceService){}
  redirectToObservable(){
    this.router.navigateByUrl('learning/observable-sikho')
  }

  ngOnInit(): void {
    let obs1 = of(2,3,6,8,1);
    obs1.pipe(scan((accum, current) => accum = accum + current))
    .subscribe(res => this.servInst.printStream(res, 'scanStreamId1'))
  }
}
