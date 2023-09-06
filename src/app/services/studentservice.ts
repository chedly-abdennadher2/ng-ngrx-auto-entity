import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../model/Student';
import { IAutoEntityService, IEntityInfo } from '@briebug/ngrx-auto-entity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService  implements  IAutoEntityService<any>{

public   constructor(private http: HttpClient) { }
  public loadAll(entityInfo:IEntityInfo) :Observable<any[]>
  {
     alert ("entree en service");
     return this.http.get<any[]> ("//localhost:8080/student/all");  
  } 
  public create(entityInfo:IEntityInfo,student:Student)
  {
    console.log(student)
    return this.http.post("//localhost:8080/student/save/",student)
  }
}
