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
  students: StudentsModule[];
  totalMarks: number;
  filtereStudents: StudentsModule[];
  private _filterText: number;
  public get filterText(): number {
    return this._filterText;
  }
  public set filterText(value: number) {
    this._filterText = value;
    this.filtereStudents = this.filterStudentByGender(value);
  }

  constructor(private studentsService: StudentsService) {}

  ngOnInit(): void {
    this.students = this.studentsService.students.map((x) => ({
      ...x,
      DOBs: x.DOB?.toDateString(),
    }));
    this.totalMarks = this.studentsService.totalMarks;
    console.warn(this.students);
    this.filtereStudents = this.students;
  }

  AddDumySTudent() {
    let studentCopy = Object.assign([], this.students);
    studentCopy.push({
      name: 'test',
      course: 'test',
      marks: 620,
      DOB: new Date(32321354325432),
      gender: 'test',
    });
    this.students = studentCopy;
    this.filtereStudents = this.filterStudentByGender(this._filterText);
    console.warn(this.students);
  }
  ChangGender() {
    let studentCopy = Object.assign([], this.students);
    studentCopy[0].marks = 679;
    this.students = studentCopy;
    this.filtereStudents = this.filterStudentByGender(this._filterText);
    console.warn(this.students);
  }

  filterStudentByGender(filterTerm: number) {
    console.warn('Filter Pipe called!');
    return this.students.filter((student) => {
      return student.marks >= filterTerm;
    });
  }
}
