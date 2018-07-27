import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { AuthService } from '../../service/auth.service';

import { User } from '../../model/user';

import * as fromAuth from './auth.actions';
import * as fromForm from '../form/form.actions';

@Injectable()
export class AuthEffects {

    constructor(private actions: Actions, private authService: AuthService) {

    }

    @Effect() login = this.actions.pipe(
        ofType(fromAuth.AuthActionTypes.LOGIN),
        map((action: fromAuth.LoginAction) => action.payload),
        switchMap((payload: { username: string, password: string }) =>
            this.authService.login(payload.username, payload.password).pipe(
                map((user: User) => new fromAuth.LoginSuccessAction({ user })),
                catchError((error) => of(new fromAuth.LoginFailureAction({ error })))
            )
        )
    );

    @Effect() loginSuccess = this.actions.pipe(
        ofType(fromAuth.AuthActionTypes.LOGIN_SUCCESS),
        map((action: fromAuth.LoginSuccessAction) => action.payload),
        map((payload: User) => new fromForm.SubmitFormSuccessAction())
    );

    @Effect() loginFailure = this.actions.pipe(
        ofType(fromAuth.AuthActionTypes.LOGIN_FAILURE),
        map((action: fromAuth.LoginFailureAction) => action.payload),
        map((error: any) => new fromForm.SubmitFormFailureAction({ error }))
    );

}
