import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { StudentFacade } from 'src/app/facades/student.facade';
import { Student } from 'src/app/model/Student';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {
   idstring :string;
   id:number;
   destroyed$ = new Subject<boolean>()
   student:Student;
   firstName:string;
   lastName: string; 
  constructor(    private studentFacade:StudentFacade,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.idstring=this.route.snapshot.paramMap.get('id');
    this.id=parseInt(this.idstring)
    console.log(this.id);
    this.studentFacade.load(this.id)
    this.studentFacade.entities$.pipe(takeUntil(this.destroyed$)).subscribe(
      entities => {
          this.student = entities[this.id];
          this.firstName=this.student.firstName;
          this.lastName=this.student.lastName;
        }
  )
  }
  public receive (form : NgForm)
  {
    console.log(form.value);
    var student=new Student();

    student.firstName=form.value.firstName;
    student.lastName=form.value.lastName;
    student.id =this.id;
    console.log (student)
    this.studentFacade.update(student) 
  
  }

}
