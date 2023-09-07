import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentCreateComponent } from './student-create/student-create.component';
import { ReadallComponent } from './readall/readall.component';
import { FormsModule } from '@angular/forms';
import { StudentUpdateComponent } from './student-update/student-update.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [StudentCreateComponent, ReadallComponent, StudentUpdateComponent],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,

  ]
})
export class StudentModule { }
