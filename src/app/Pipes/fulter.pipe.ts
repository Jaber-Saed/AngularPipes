import { Pipe, PipeTransform } from '@angular/core';
import { StudentsModule } from '../students/students.module';

@Pipe({
  name: 'fulter',
  pure: false,
})
export class FulterPipe implements PipeTransform {
  transform(student: StudentsModule[], filterText: number) {
    console.warn('Filter Pipe called!');

    return student.filter((student) => {
      return student.marks >= filterText;
    });
  }
}
