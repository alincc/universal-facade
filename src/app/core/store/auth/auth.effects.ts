import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { defer, of } from 'rxjs';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';

import { AppState } from '..';
import { User } from '../../model/user';

import { AuthService } from '../../service/auth.service';

import { AlertComponent } from '../../../shared/alert/alert.component';

import { selectDialogIsOpen } from '../dialog';
import { selectLoginRedirect } from '../auth';

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

    @Effect() loginSuccess = this.actions.pipe(
        ofType(fromAuth.AuthActionTypes.LOGIN_SUCCESS),
        withLatestFrom(this.store.select(selectDialogIsOpen)),
        withLatestFrom(this.store.select(selectLoginRedirect)),
        map(([[action, isOpen], navigation]) => {
            if (isOpen) {
                this.store.dispatch(new fromDialog.CloseDialogAction());
            }
            if (navigation) {
                this.store.dispatch(new fromRouter.Go(navigation));
            }
            return new fromSnackbar.OpenSnackbarAction({
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
            });
        })
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
        map(() => new fromRouter.Go({ path: ['/dashboard'] }))
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
        map(() => new fromAuth.SessionStatusAction({ authenticated: this.authService.hasSession() }))
    );

    @Effect({ dispatch: false }) sessionStatus = this.actions.pipe(
        ofType(fromAuth.AuthActionTypes.SESSION_STATUS),
        map((action: fromAuth.SessionStatusAction) => action.payload),
        map((payload: { authenticated: boolean }) => payload.authenticated),
        map((authenticated: boolean) => {
            if (authenticated) {
                this.store.dispatch(new fromAuth.GetUserAction());
            }
        })
    );

    @Effect() init = defer(() => {
        return of(new fromAuth.CheckSessionAction());
    });

}
