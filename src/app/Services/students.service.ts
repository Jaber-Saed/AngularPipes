import { Injectable } from '@angular/core';
import { StudentsModule } from '../students/students.module';


@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  constructor() {}

  students: StudentsModule[] = [
    {
      name: 'Mark Vought',
      course: 'MBA',
      marks: 520,
      DOB: new Date('11-12-1997'),
      gender: 'Male',
    },
    {
      name: 'Mark Vought',
      course: 'MBA',
      marks: 520,
      DOB: new Date('11-12-1997'),
      gender: 'Male',
    },
    {
      name: 'Mark Vought',
      course: 'MBA',
      marks: 520,
      DOB: new Date('11-12-1997'),
      gender: 'Male',
    },
    {
      name: 'Sofa',
      course: 'MBA',
      marks: 520,
      DOB: new Date('11-12-1997'),
      gender: 'Female',
    },
    {
      name: 'Sofa',
      course: 'MBA',
      marks: 520,
      DOB: new Date('11-12-1997'),
      gender: 'Female',
    },
    {
      name: 'Sofa',
      course: 'MBA',
      marks: 520,
      DOB: new Date('11-12-1997'),
      gender: 'Female',
    },
  ];

    totalMarks: number = 600;
    
}

