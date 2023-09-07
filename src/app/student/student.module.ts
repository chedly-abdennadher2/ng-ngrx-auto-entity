import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentCreateComponent } from './student-create/student-create.component';
import { ReadallComponent } from './readall/readall.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [StudentCreateComponent, ReadallComponent],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class StudentModule { }
