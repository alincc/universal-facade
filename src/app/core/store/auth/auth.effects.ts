import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';

import { defer, of } from 'rxjs';
import { catchError, filter, map, switchMap, withLatestFrom } from 'rxjs/operators';

import { AppState } from '..';
import { User } from '../../model/user';

import { AuthService } from '../../service/auth.service';

import { AlertComponent } from '../../../shared/alert/alert.component';

import { selectDialogIsOpen } from '../dialog';

import * as fromAuth from './auth.actions';
import * as fromDialog from '../dialog/dialog.actions';
import * as fromRouter from '../router/router.actions';
import * as fromSnackbar from '../snackbar/snackbar.actions';

@Injectable()
export class AuthEffects {

    constructor(
        private actions: Actions,
        private store: Store<AppState>,
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

    @Effect() logout = this.actions.pipe(
        ofType(fromAuth.AuthActionTypes.LOGOUT),
        switchMap(() =>
            this.authService.logout().pipe(
                map((response: any) => new fromAuth.LogoutSuccessAction({ message: response.message })),
                catchError((response) => of(new fromAuth.LogoutFailureAction({ response })))
            )
        )
    );

    @Effect() logoutSuccess = this.actions.pipe(
        ofType(fromAuth.AuthActionTypes.LOGOUT_SUCCESS),
        map(() => new fromRouter.GoAction({ path: ['/dashboard'] }))
    );

    @Effect() loginSuccess = this.actions.pipe(
        ofType(fromAuth.AuthActionTypes.LOGIN_SUCCESS),
        withLatestFrom(this.store.select(selectDialogIsOpen)),
        map(([state]) => state),
        switchMap((isOpen: boolean) => [
            isOpen ? new fromDialog.CloseDialogAction() : undefined,
            new fromSnackbar.OpenSnackbarAction({
                snackbar: {
                    ref: AlertComponent,
                    config: {
                        snackbar: {
                            duration: 15000
                        },
                        instance: {
                            type: 'success',
                            message: 'Login success!'
                        }
                    }
                }
            })
        ].filter((action: Action) => action !== undefined))
    );

    @Effect() loginFailure = this.actions.pipe(
        ofType(fromAuth.AuthActionTypes.LOGIN_FAILURE),
        map((action: fromAuth.LoginFailureAction) => action.payload),
        map((payload: { response: any }) => new fromSnackbar.OpenSnackbarAction({
            snackbar: {
                ref: AlertComponent,
                config: {
                    snackbar: {
                        duration: 60000
                    },
                    instance: {
                        type: 'danger',
                        message: payload.response.error
                    }
                }
            }
        }))
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
