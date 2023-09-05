import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../model/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

public   constructor(private http: HttpClient) { }
  public getAll() 
  {
   return this.http.get("//localhost:8080/student/all");  
  } 
  public create(student:Student)
  {
    console.log(student)
    return this.http.post("//localhost:8080/student/save/",student)
  }
}
