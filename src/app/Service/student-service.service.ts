import { Injectable } from '@angular/core';
import { Student } from '../Model/Student'
import { Observable, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  students: Student[] = [
    new Student("Student1", "Student1", "234567"),
    new Student("Student2", "Student2", "234567"),
    new Student("Student3", "Student3", "234567")
];

private studentSubject = new BehaviorSubject([]);
constructor(){}

  addStudent(student:Student) {
    // spread operato -> ...
    this.students = [... this.students, student];
    this.studentSubject.next(this.students); // next es la parte importante. Lo que hace es emitir un nuevo valor, en este caso un alumno
  }

  getStudents(): Observable<Student[]>{
    return this.studentSubject.asObservable();
  }

}