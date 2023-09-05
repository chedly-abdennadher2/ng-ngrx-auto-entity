import { Injectable } from "@angular/core";
import { StudentFacadeBase } from "../state/StudentState";
import { Store } from "@ngrx/store";
import { AppState } from "../state/app.state";
import { Student } from "../model/Student";

@Injectable({
    providedIn: 'root'
  })
  export class StudentFacade extends StudentFacadeBase {
   constructor (store :Store<AppState>)
   {
    super (Student,store)
   } 
    
  }
