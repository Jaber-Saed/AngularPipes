import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'percentage',
  pure: false,
})
export class PercentagePipe implements PipeTransform {
  transform(value: number, totalMarks: number, decimal: number) {
    console.warn('percentage pip called!');
    return ((value / totalMarks) * 100).toFixed(decimal);
  }
}
