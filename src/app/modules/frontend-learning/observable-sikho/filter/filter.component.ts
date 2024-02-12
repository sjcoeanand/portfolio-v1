import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { from, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  constructor(private router : Router){}
  
  sampleData = [
    {id: 1, name: 'ammy', gender: 'female'},
    {id: 2, name: 'sam', gender: 'male'},
    {id: 3, name: 'john', gender: 'male'},
    {id: 4, name: 'leena', gender: 'female'},
    {id: 5, name: 'alon', gender: 'male'},
    {id: 6, name: 'sakshi', gender: 'female'},
    {id: 7, name: 'smith', gender: 'male'}
  ]
  result:any;
  redirectToObservable(){
    this.router.navigateByUrl('learning/observable-sikho')
  }
  columnNames:any;
  conditions:any;
  selelctedColumn:any;
  selelctedCondition:any;
  filterValue:any = '';

  ngOnInit(): void {
    this.columnNames = ['id', 'name', 'gender'];
    this.conditions = ['>', '>=', '<=', '<', '=='];
    this.result = this.sampleData;
  }
  
  selectedFilterData(type:any){
    if(type == 'column'){
      this.selelctedCondition = '';      
      this.filterValue = '';
      if(this.selelctedColumn === 'gender' || this.selelctedColumn ===  'name'){
        this.conditions = ['==', '!=='];
      } 
      if(this.selelctedColumn === 'id') {
        this.conditions = ['>', '>=', '<=', '<', '==']
      }
    }
    if(type == 'condition'){
      this.filterValue = '';  
    }
  }
  refreshtable(){
    this.result = this.sampleData;
  }
  applyFilter(){
    const observer1 = from(this.sampleData);
    observer1.pipe(
     toArray()
    ).subscribe((res) => {
                let a = `x.${this.selelctedColumn} ${this.selelctedCondition}`.replace(/["']/g, "");
                let b = a + `"${this.filterValue}"`;
                console.log("bb ==>", b);
                
                this.result = res.filter((x:any) =>{
                  if(eval(b)){
                    return x
                  }
                })
    })
  }

}
