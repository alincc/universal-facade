import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { map } from 'rxjs/operators';

import { AppState } from '..';

import { Dialog } from './dialog.reducer';

import * as fromDialog from './dialog.actions';

@Injectable()
export class DialogEffects {

    constructor(
        private actions: Actions,
        private dialog: MatDialog,
        private store: Store<AppState>
    ) {

    }

    @Effect({ dispatch: false }) openDialog = this.actions.pipe(
        ofType(fromDialog.DialogActionTypes.OPEN),
        map((action: fromDialog.OpenDialogAction) => action.payload),
        map((payload: { dialog: Dialog, action: any }) => {

            const dialogRef = this.dialog.open(payload.dialog.ref, payload.dialog.config.dialog);

            for (const key in payload.dialog.config.instance) {
                if (payload.dialog.config.instance.hasOwnProperty(key)) {
                    dialogRef.componentInstance[key] = payload.dialog.config.instance[key];
                }
            }

            dialogRef.componentInstance.action = payload.action;

            dialogRef.componentInstance.cancel = () => this.store.dispatch(new fromDialog.CloseDialogAction());
        })
    );

    @Effect({ dispatch: false }) closeDialog = this.actions.pipe(
        ofType(fromDialog.DialogActionTypes.CLOSE),
        map(() => this.dialog.closeAll())
    );

}
