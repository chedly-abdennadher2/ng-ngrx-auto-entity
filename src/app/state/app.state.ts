import { IEntityState } from "@briebug/ngrx-auto-entity";
import { ActionReducerMap } from "@ngrx/store";
import { Student } from "../model/Student";
import { studentReducer } from "./StudentState";

export interface IAppState{
student: IEntityState<Student> 
}
export type AppState =IAppState;

export const appReducer: ActionReducerMap<AppState>= 
{
student:studentReducer 
}