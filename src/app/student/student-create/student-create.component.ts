import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public receive (form : NgForm)
  {
    console.log(form.value);
  
  }
}
