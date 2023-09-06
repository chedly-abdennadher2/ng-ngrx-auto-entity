import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/studentservice';
import { Student } from '../../model/Student';
import { StudentFacade } from 'src/app/facades/student.facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-readall',
  templateUrl: './readall.component.html',
  styleUrls: ['./readall.component.css']
})
export class ReadallComponent implements OnInit {
  students$:Observable<Student[]>

    constructor(
    
    private studentFacade:StudentFacade 
    )
  {
  
  }
  ngOnInit(): void {
  }
  public   readAll()
  {
    this.students$=this.studentFacade.all$;
    this.studentFacade.loadAll();
    this.students$.subscribe(students=>{
      console.log(students)
    })
  }

}
