import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonservService } from '../commonserv.service';

@Component({
  selector: 'app-form-basic',
  templateUrl: './form-basic.component.html',
  styleUrls: ['./form-basic.component.scss']
})
export class FormBasicComponent {

    constructor(private cmnServ : CommonservService, private fb : FormBuilder){

    }
    showData : any = ''


    sampleForm!:FormGroup;
    ngOnInit(): void {
      this.cmnServ.obsSub1.subscribe((res)=>{
        this.showData = res;
      })

      this.sampleForm = this.fb.group({
        fname : ['', Validators.required],
        fArray : []
      })
    }
    
    innerForm : FormGroup = this.fb.group({
      sname : ['']
    })

    onSubmit(val:string){
      this.sampleForm.controls['fArray']
    }
}
