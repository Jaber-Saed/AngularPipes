import { PipeTransform, Pipe } from '@angular/core';


@Pipe({
  name: 'percentage'
})


export class PercentagePipe implements PipeTransform {
  transform(value: any, totalMarks: number, decimal: number){
    return (value / totalMarks * 100).toFixed(decimal) ;
  }
}
