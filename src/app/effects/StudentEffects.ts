import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect } from "@ngrx/effects";
import { tap } from "rxjs/operators";

@Injectable()
export class StudentEffects{
    constructor(private route:Router,        protected _actions$:   Actions)
    {

    }
    createSuccess$ = createEffect(
        () => this._actions$.pipe(
            tap(action => {
                    this.route.navigate(["student/readall"]);
                
            })
        ),
        { dispatch: false }
    );


}
