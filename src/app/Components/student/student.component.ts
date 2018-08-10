import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Student } from '../../Model/Student';
import { Location} from '@angular/common';
import { StudentServiceService } from '../../Service/student-service.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  model = new Student ("", "", "");
  submitted = false;
  students: Student [];
  active = true;

  constructor( private location: Location,
                private service: StudentServiceService) { 
                
  }

  ngOnInit() {
    this.students = this.service.students;
    this.service.getStudents().
    subscribe(students => this.students = students);

  }

  newStudent() {
    this.model = new Student ("","","");
    this.active = false;
    setTimeout(() => {this.active = true;}, 0);
  }

  onSubmit() {
    this.submitted = true;
    console.log('submit');
    this.service.addStudent(this.model);
    this.newStudent();
  }

  goBack(): void {
    this.location.back();
  }

}
