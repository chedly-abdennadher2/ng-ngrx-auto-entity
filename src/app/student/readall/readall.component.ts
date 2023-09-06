import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/studentservice';
import { Student } from '../../model/Student';
import { StudentFacade } from 'src/app/facades/student.facade';

@Component({
  selector: 'app-readall',
  templateUrl: './readall.component.html',
  styleUrls: ['./readall.component.css']
})
export class ReadallComponent implements OnInit {
  constructor(
    
    private studentFacade:StudentFacade 
    )
  {
  
  }
  ngOnInit(): void {
  }
  public   readAll()
  {
    this.studentFacade.loadAll();
  }

}
