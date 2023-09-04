import { Pipe, PipeTransform } from '@angular/core';
import { StudentsModule } from '../students/students.module';

@Pipe({
  name: 'fulter',
})
export class FulterPipe implements PipeTransform {
  transform(student: StudentsModule[], filterText: string) {
    if (student.length === 0 || filterText === '') {
      return student;
    } else {
      return student.filter((student) => {
        return (
          student.gender.toLocaleLowerCase === filterText.toLocaleLowerCase
        )
      });
    }
  }
}
