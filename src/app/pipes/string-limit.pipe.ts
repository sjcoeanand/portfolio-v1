import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringLimit'
})
export class StringLimitPipe implements PipeTransform {

  transform(value: any, limit = 22, ellipses = '...') {
      if(value){
        return value?.length > limit ? value.substring(0, limit) + ellipses : value
      }
  }
}
