import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class StudentsModule {
  name: string = '';
  course: string = '';
  marks: number = 0;
  DOB?: Date ;
  gender: string = '';
}
