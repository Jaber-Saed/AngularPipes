import { Component, OnInit } from '@angular/core';
import { StudentsService } from './Services/students.service';
import { StudentsModule } from './students/students.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StudentsService],
})
export class AppComponent implements OnInit {
  title = 'AngularPipes';
  filterText: number;
  students: StudentsModule[];
  totalMarks: number;

  constructor(private studentsService: StudentsService) {}

  ngOnInit(): void {
    this.students = this.studentsService.students.map((x) => ({
      ...x,
      DOBs: x.DOB?.toDateString(),
    }));
    this.totalMarks = this.studentsService.totalMarks;
    console.warn(this.students);
  }

  AddDumySTudent() {
    let studentCopy = Object.assign([], this.students);
    studentCopy.push({
      name: 'test',
      course: 'test',
      marks: 220,
      DOB: new Date(32321354325432),
      gender: 'test',
    });
    this.students = studentCopy;
    console.warn(this.students);
  }
  ChangGender() {
    let studentCopy = Object.assign([], this.students);
    studentCopy[0].gender = 'Female';
    this.students = studentCopy;
    console.warn(this.students);
  }
}
