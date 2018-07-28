import { Action } from '@ngrx/store';
import { Dialog } from './dialog.reducer';
import { MatDialogRef } from '@angular/material';

export enum DialogActionTypes {
    OPEN = '[Dialog] open',
    CLOSE = '[Dialog] close'
}

export class OpenDialogAction implements Action {
    readonly type = DialogActionTypes.OPEN;
    constructor(public payload: { dialog: Dialog, action: any }) { }
}

export class CloseDialogAction implements Action {
    readonly type = DialogActionTypes.CLOSE;
}

export type DialogActions =
    OpenDialogAction |
    CloseDialogAction;
