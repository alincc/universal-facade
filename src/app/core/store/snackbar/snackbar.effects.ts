import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { MatSnackBar } from '@angular/material';

import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { AppState } from '..';

import { Snackbar } from './snackbar.reducer';

import * as fromSnackbar from './snackbar.actions';

@Injectable()
export class SnackbarEffects {

    private subscriptions: Subscription[];

    constructor(
        private actions: Actions,
        private snackBar: MatSnackBar,
        private store: Store<AppState>
    ) {
        this.subscriptions = [];
    }

    @Effect({ dispatch: false }) openSnackbar = this.actions.pipe(
        ofType(fromSnackbar.SnackbarActionTypes.OPEN),
        map((action: fromSnackbar.OpenSnackbarAction) => action.payload),
        map((payload: { snackbar: Snackbar, action?: any }) => {

            const snackbarRef = this.snackBar.openFromComponent(payload.snackbar.ref, {
                panelClass: payload.snackbar.config.panelClass,
                duration: payload.snackbar.config.timeout,
                verticalPosition: 'top'
            });

            snackbarRef.instance.type = payload.snackbar.config.type;

            snackbarRef.instance.message = payload.snackbar.config.message;

            snackbarRef.instance.action = payload.action;

            snackbarRef.instance.dismiss = () => this.store.dispatch(new fromSnackbar.DismissSnackbarAction());

            this.subscriptions.push(snackbarRef.afterDismissed().subscribe(() => {
                this.store.dispatch(new fromSnackbar.DismissSnackbarAction());
            }));
        })
    );

    @Effect({ dispatch: false }) closeSnackbar = this.actions.pipe(
        ofType(fromSnackbar.SnackbarActionTypes.DISMISS),
        map(() => {
            this.snackBar.dismiss();
            this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
        })
    );

}
