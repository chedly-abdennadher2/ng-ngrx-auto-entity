import { IEntityState, buildState } from "@briebug/ngrx-auto-entity";
import { Student } from "../model/Student";

export const {initialState,facade:StudentFacadeBase}

=buildState(Student);
export function studentReducer (state=initialState) : IEntityState<Student>
{
    return state;
}