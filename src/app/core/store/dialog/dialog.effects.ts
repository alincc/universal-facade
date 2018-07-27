import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { map } from 'rxjs/operators';

import { AppState } from '../';

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
            const dialogConfig = new MatDialogConfig();
            dialogConfig.autoFocus = true;

            const dialogRef = this.dialog.open(payload.dialog.ref, dialogConfig);

            dialogRef.componentInstance.name = payload.dialog.config.name;
            if (payload.dialog.config.submitLabel) {
                dialogRef.componentInstance.submitLabel = payload.dialog.config.submitLabel;
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
