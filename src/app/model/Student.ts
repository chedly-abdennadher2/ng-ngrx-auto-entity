import { Entity, Key, uriNameOfEntity } from "@briebug/ngrx-auto-entity";
@Entity({modelName:"Student",uriName:"customers"})

export class Student {

public modelName:string ="Student"
public modelType:any;
@Key id:number;
public firstName:string;
public lastName:string; 


}