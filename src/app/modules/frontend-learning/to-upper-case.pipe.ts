import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toUpperCase1'
})
export class ToUpperCasePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(value){
      let uppercase = value.toString().toUpperCase()
      return uppercase
    }
    return null;
  }

}
