import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { map } from 'rxjs/operators';

import { AppState } from '..';

import { DialogRef } from './dialog.reducer';

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
        map((payload: { dialog: DialogRef, action: any }) => {

            // TODO: conditionally use full screen if in mobile view

            const dialogRef = this.dialog.open(payload.dialog.ref, {
                autoFocus: true,
                // maxWidth: '100vw',
                // width: '100%',
                // maxHeight: '100vh',
                // height: '100%',
            });

            for (const key in payload.dialog.config) {
                if (payload.dialog.config.hasOwnProperty(key)) {
                    dialogRef.componentInstance[key] = payload.dialog.config[key];
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
