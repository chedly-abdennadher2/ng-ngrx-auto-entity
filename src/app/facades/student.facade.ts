import { Injectable } from "@angular/core";
import { StudentFacadeBase, loadAll } from "../state/StudentState";
import { Store } from "@ngrx/store";
import { AppState } from "../state/app.state";
import { Student } from "../model/Student";
import { StudentService } from "../services/studentservice";

@Injectable({
    providedIn: 'root'
  })
  export class StudentFacade extends StudentFacadeBase {
   constructor (private store :Store<AppState>,private studentService:StudentService)
   {
    super (Student,store)
   } 
   
   }    
  
