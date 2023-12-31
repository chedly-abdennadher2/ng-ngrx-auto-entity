import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../model/Student';
import { IAutoEntityService, IEntityInfo, IEntityWithPageInfo, Page } from '@briebug/ngrx-auto-entity';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService  implements  IAutoEntityService<any>{

public   constructor(private http: HttpClient) { }
  public load(entityInfo: IEntityInfo, keys: any, criteria?: any): Observable<any> {
    let response: Observable<any>;
    console.log (keys);
    response= this.http.get<Student> ("//localhost:8080/student/find/"+keys);  
    return response;   
  }  
  public loadAll(entityInfo: IEntityInfo, criteria?: any):Observable<any[]>
   {
     let response: Observable<any[]>;
     response= this.http.get<Student[]> ("//localhost:8080/student/all");  
     return response.pipe(
      
      map          ((items: any) => {
        console.log (items); 
          
        for (let item of items) {
              item.student = new Student();
          }
          return items;
      }));
    }
    public loadPage(entityInfo: IEntityInfo, page: Page) : Observable<IEntityWithPageInfo<any>>
    {
    return null;
    /*  let response: Observable<any[]>;
      response= this.http.get<any[]> ("//localhost:8080/student/all");  
      return response.pipe(
       
       map(  response=>({               
        pageInfo: {
      
        page: { page: page.page, size: page.size },
        totalCount: response.totalElements
    },
    entities: response.content
    }))
     )
    */
    }  
  public create(entityInfo:IEntityInfo,student:Student)
  {
    console.log(student)
    return this.http.post("//localhost:8080/student/save/",student)
  }
  public update(entityInfo:IEntityInfo,student:Student):Observable<any>
  {
    console.log(student)
    return this.http.put("//localhost:8080/student/update/",student)
  }
  public delete(entityInfo: IEntityInfo, student:Student, criteria?: any, originalEntity?: any): Observable<any> {
    console.log (student+"service")
    return this.http.delete("//localhost:8080/student/delete/"+student.id)
    
  }
}
