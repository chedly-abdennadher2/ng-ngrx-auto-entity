import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentCreateComponent } from './student-create/student-create.component';
import { ReadallComponent } from './readall/readall.component';
import { FormsModule } from '@angular/forms';
import { StudentUpdateComponent } from './student-update/student-update.component';
import { AppRoutingModule } from '../app-routing.module';
import { StudentEffects } from '../effects/StudentEffects';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [StudentCreateComponent, ReadallComponent, StudentUpdateComponent],
  imports: [
   
     CommonModule,
   //  EffectsModule.forFeature([StudentEffects]),
   
       FormsModule,
    AppRoutingModule,
     
  ]
})
export class StudentModule { }
