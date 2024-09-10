import { Component } from '@angular/core';
import { UserdetailService } from 'src/app/services/userdetail.service';

@Component({
  selector: 'app-alluser',
  templateUrl: './alluser.component.html',
  styleUrls: ['./alluser.component.scss']
})
export class AlluserComponent {
  responseData:any;
  constructor(private servInstance: UserdetailService){}
  ngOnInit(): void {
      this.servInstance.getAllUsers().subscribe((res:any)=>{
        this.responseData = res.data;
      })
  }
}
