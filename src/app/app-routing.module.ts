import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReadallComponent } from './student/readall/readall.component';
import { StudentCreateComponent } from './student/student-create/student-create.component';

const routes: Routes = [

  {path:"student/readall", component:ReadallComponent},
  {path:"student/create", component: StudentCreateComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
