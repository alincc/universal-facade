import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';

import { AppState } from '../store';

import { AlertComponent } from '../../shared/alert/alert.component';

import { selectIsAuthenticated, selectRole } from '../store/auth';

import * as fromSnackbar from '../store/snackbar/snackbar.actions';
import { Role } from '../model/user';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private store: Store<AppState>) {

    }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        return new Promise<boolean>((resolve) => {
            const roles = route.data.roles;
            if (roles) {
                this.store.select(selectIsAuthenticated).subscribe((authenticated: boolean) => {
                    if (authenticated) {
                        this.store.select(selectRole).subscribe((role: Role) => {
                            if (roles.indexOf(Role[role]) >= 0) {
                                resolve(true);
                            } else {
                                this.showSnackbarAlert('Unauthorized!');
                            }
                        }).unsubscribe();
                    } else {
                        this.showSnackbarAlert('Forbidden!');
                        resolve(false);
                    }
                }, () => {
                    resolve(false);
                }).unsubscribe();
            } else {
                resolve(true);
            }
        });
    }

    private showSnackbarAlert(message: string): void {
        this.store.dispatch(new fromSnackbar.OpenSnackbarAction({
            snackbar: {
                ref: AlertComponent,
                config: {
                    snackbar: {
                        duration: 15000
                    },
                    instance: {
                        type: 'danger',
                        message: message
                    }
                }
            }
        }));
    }

}
