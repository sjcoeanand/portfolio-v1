import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import SampleService from 'src/app/services/sample.service';

@Component({
  selector: 'app-route-resolve',
  templateUrl: './route-resolve.component.html',
  styleUrls: ['./route-resolve.component.scss']
})



export class RouteResolveComponent {
  responseData:any;
  activeRoutes: ActivatedRoute = inject(ActivatedRoute)
  constructor(private router : Router, private sampleServiceInst : SampleService){}
  ngOnInit(): void {
      // console.log("router", this.activeRoutes.snapshot.data['photoList']);
      // route resolver call
      this.responseData = this.activeRoutes.snapshot.data['photoList']

      // normal api call
      // this.sampleServiceInst.fetchPhotosfromJsonPlaceholder1().subscribe(res => {
      //   this.responseData = res;
      // })
  }


  redirectToLearning(){
    this.router.navigateByUrl('learning')
  }
}
