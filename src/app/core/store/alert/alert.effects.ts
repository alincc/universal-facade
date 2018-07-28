import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { MatSnackBar } from '@angular/material';

import { map } from 'rxjs/operators';

import { AppState } from '..';

import { AlertRef } from './alert.reducer';

import * as fromAlert from './alert.actions';

@Injectable()
export class AlertEffects {

    constructor(
        private actions: Actions,
        private snackBar: MatSnackBar,
        private store: Store<AppState>
    ) {

    }

    @Effect({ dispatch: false }) openAlert = this.actions.pipe(
        ofType(fromAlert.AlertActionTypes.OPEN),
        map((action: fromAlert.OpenAlertAction) => action.payload),
        map((payload: { alert: AlertRef, action?: any }) => {

            const alertRef = this.snackBar.openFromComponent(payload.alert.ref, {
                duration: 10000,
                verticalPosition: 'top'
            });

            for (const key in payload.alert.config) {
                if (payload.alert.config.hasOwnProperty(key)) {
                    alertRef.instance[key] = payload.alert.config[key];
                }
            }

            alertRef.instance.action = payload.action;

            alertRef.instance.close = () => this.store.dispatch(new fromAlert.CloseAlertAction());

            alertRef.afterDismissed().subscribe(() => {
                this.store.dispatch(new fromAlert.CloseAlertAction());
            }).unsubscribe();
        })
    );

    @Effect({ dispatch: false }) closeAlert = this.actions.pipe(
        ofType(fromAlert.AlertActionTypes.CLOSE),
        map(() => this.snackBar.dismiss())
    );

}
