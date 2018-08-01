import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject, Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';

import { Observable, of } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';

import { AppState } from '../store';
import { Role, User } from '../model/user';
import { AlertComponent } from '../../shared/alert/alert.component';
import { LoginComponent } from '../../shared/login/login.component';

import { selectIsAuthenticated, selectUser } from '../store/auth';

import * as fromAuth from '../store/auth/auth.actions';
import * as fromDialog from '../store/dialog/dialog.actions';
import * as fromRouter from '../store/router/router.actions';
import * as fromSnackbar from '../store/snackbar/snackbar.actions';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        @Inject(PLATFORM_ID) private platformId: string,
        private store: Store<AppState>
    ) {

    }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        const roles = route.data.roles;
        return this.requiresAuthorization(roles).pipe(
            switchMap((authorize: boolean) => {
                return authorize ? this.isAuthorized(state.url, roles) : this.isAuthenticated(state.url);
            })
        );
    }

    private requiresAuthorization(roles: Role[]): Observable<boolean> {
        return roles ? of(true) : of(false);
    }

    private isAuthorized(url: string, roles: Role[]): Observable<boolean> {
        return this.isAuthenticated(url).pipe(
            switchMap((authenticated: boolean) => authenticated ? this.store.select(selectUser).pipe(
                filter((user: User) => user !== undefined),
                map((user: User) => user.role),
                map((role: Role) => {
                    const authorized = roles.indexOf(Role[role]) >= 0;
                    if (!authorized) {
                        this.store.dispatch(new fromRouter.Go({ path: ['/dashboard'] }));
                        if (isPlatformBrowser(this.platformId)) {
                            this.store.dispatch(new fromSnackbar.OpenSnackbarAction({
                                snackbar: {
                                    ref: AlertComponent,
                                    config: {
                                        snackbar: {
                                            duration: 30000
                                        },
                                        instance: {
                                            type: 'danger',
                                            message: 'Unauthorized!'
                                        }
                                    }
                                }
                            }));
                        }
                    }
                    return authorized;
                })
            ) : of(false))
        );
    }

    private isAuthenticated(url: string): Observable<boolean> {
        return this.store.select(selectIsAuthenticated).pipe(
            map((authenticated: boolean) => {
                if (!authenticated && isPlatformBrowser(this.platformId)) {
                    this.store.dispatch(new fromAuth.SetLoginRedirectAction({ path: [url] }));
                    this.store.dispatch(new fromDialog.OpenDialogAction({
                        dialog: {
                            ref: LoginComponent,
                            config: {
                                dialog: {
                                    autofocus: true
                                },
                                instance: {
                                    title: 'Login'
                                }
                            }
                        },
                        action: fromAuth.LoginAction
                    }));
                }
                return authenticated;
            })
        );
    }

}
