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

  constructor(private studentsService: StudentsService) {}

  ngOnInit(): void {

    this.students = this.studentsService.students
    this.totalMarks = this.studentsService.totalMarks;
  }
}
