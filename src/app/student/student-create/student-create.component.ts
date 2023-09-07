import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentFacade } from 'src/app/facades/student.facade';
import { Student } from 'src/app/model/Student';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

  constructor(    private studentFacade:StudentFacade 
    ) { }

  ngOnInit(): void {
  }
  public receive (form : NgForm)
  {
    console.log(form.value);
    var student=new Student();

    student.firstName=form.value.firstName;
    student.lastName=form.value.lastName;
    console.log (student)
    this.studentFacade.create(student) 
  }
}
