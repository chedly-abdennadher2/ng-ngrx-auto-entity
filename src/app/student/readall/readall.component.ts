import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/studentservice';
import { Student } from '../../model/Student';
import { StudentFacade } from 'src/app/facades/student.facade';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-readall',
  templateUrl: './readall.component.html',
  styleUrls: ['./readall.component.css']
})
export class ReadallComponent implements OnInit {
  students$:Observable<Student[]>
  students : Student[]
  student:Student; 
  destroyed$ = new Subject<boolean>()
 
  constructor(
    
    private studentFacade:StudentFacade 
    )
  {
  
  }
  ngOnInit(): void {
    this.students$=this.studentFacade.all$;
    this.studentFacade.loadAll();
    
    this.students$.subscribe(students=>{
      this.students=students

    })
  }

public  supprimer(id:number)
{
  this.studentFacade.load(id)
  this.studentFacade.entities$.pipe(takeUntil(this.destroyed$)).subscribe(
    entities => {
        this.student = entities[id];

      }

)
      if (this.student!=null)
{this.studentFacade.delete(this.student)
}
}

}
