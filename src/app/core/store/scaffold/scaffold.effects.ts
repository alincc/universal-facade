import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { defer, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { Scaffold } from '../../model/scaffold';
import { ScaffoldService } from '../../service/scaffold.service';

import * as fromAuth from '../auth/auth.actions';
import * as fromScaffold from './scaffold.actions';

@Injectable()
export class ScaffoldEffects {

    constructor(private actions: Actions, private scaffoldService: ScaffoldService) {

    }

    @Effect() loadScaffold = this.actions.pipe(
        ofType(fromScaffold.ScaffoldActionTypes.LOAD, fromAuth.AuthActionTypes.LOGIN_SUCCESS, fromAuth.AuthActionTypes.GET_USER),
        switchMap(() =>
            this.scaffoldService.get().pipe(
                map((scaffolding: Scaffold[]) => new fromScaffold.LoadScaffoldSuccessAction({ scaffolding })),
                catchError((error) => of(new fromScaffold.LoadScaffoldFailureAction({ error })))
            )
        )
    );

    @Effect() init = defer(() => {
        return of(new fromScaffold.LoadScaffoldAction());
    });

}
