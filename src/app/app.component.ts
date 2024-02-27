import { Component, inject } from '@angular/core';
import { Router ,Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio-v1';
  showLoader:boolean = false;

  router : Router = inject(Router);
  ngOnInit(): void {
    let a =  this.router.events.subscribe((res : Event) => {
      if(res instanceof  NavigationStart) {
        this.showLoader = true
      }
      if(res instanceof  NavigationEnd || res instanceof  NavigationCancel || res instanceof  NavigationError) {
        this.showLoader = false
      }
    })
    
  }
}
