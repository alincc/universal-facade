import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { AuthService } from '../../service/auth.service';

import * as fromAuth from './auth.actions';
import { User } from '../../model/user';

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

}
