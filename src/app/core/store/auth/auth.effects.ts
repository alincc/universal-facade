import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { defer, of } from 'rxjs';
import { catchError, map, switchMap, filter } from 'rxjs/operators';

import { User } from '../../model/user';

import { AuthService } from '../../service/auth.service';

import * as fromAuth from './auth.actions';
import * as fromForm from '../form/form.actions';

@Injectable()
export class AuthEffects {

    constructor(
        private actions: Actions,
        private authService: AuthService
    ) {

    }

    @Effect() login = this.actions.pipe(
        ofType(fromAuth.AuthActionTypes.LOGIN),
        map((action: fromAuth.LoginAction) => action.payload),
        switchMap((payload: { username: string, password: string }) =>
            this.authService.login(payload.username, payload.password).pipe(
                map((user: User) => new fromAuth.LoginSuccessAction({ user })),
                catchError((response) => of(new fromAuth.LoginFailureAction({ response })))
            )
        )
    );

    @Effect() loginSuccess = this.actions.pipe(
        ofType(fromAuth.AuthActionTypes.LOGIN_SUCCESS),
        map((action: fromAuth.LoginSuccessAction) => action.payload),
        map(() => new fromForm.SubmitFormSuccessAction())
    );

    @Effect() loginFailure = this.actions.pipe(
        ofType(fromAuth.AuthActionTypes.LOGIN_FAILURE),
        map((action: fromAuth.LoginFailureAction) => action.payload),
        map((payload: { response: any }) => payload.response),
        map((response: any) => new fromForm.SubmitFormFailureAction({ response }))
    );

    @Effect() getUser = this.actions.pipe(
        ofType(fromAuth.AuthActionTypes.GET_USER),
        switchMap(() =>
            this.authService.getUser().pipe(
                map((user: User) => new fromAuth.GetUserSuccessAction({ user })),
                catchError((response) => of(new fromAuth.GetUserFailureAction({ response })))
            )
        )
    );

    @Effect() checkSession = this.actions.pipe(
        ofType(fromAuth.AuthActionTypes.CHECK_SESSION),
        filter(() => this.authService.hasSession()),
        map(() => new fromAuth.GetUserAction())
    );

    @Effect() init = defer(() => {
        return of(new fromAuth.CheckSessionAction());
    });

}
