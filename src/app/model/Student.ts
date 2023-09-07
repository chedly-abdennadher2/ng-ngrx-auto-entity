import { Entity, Key, uriNameOfEntity } from "@briebug/ngrx-auto-entity";
@Entity({modelName:"Student",uriName:"customers"})

export class Student {
@Key id:number;
public modelName:string ="Student"
public modelType:any;
public firstName:string;
public lastName:string; 


}