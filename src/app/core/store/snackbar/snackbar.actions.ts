import { Action } from '@ngrx/store';
import { Snackbar } from './snackbar.reducer';

export enum SnackbarActionTypes {
    OPEN = '[Snackbar] open',
    DISMISS = '[Snackbar] dismiss'
}

export class OpenSnackbarAction implements Action {
    readonly type = SnackbarActionTypes.OPEN;
    constructor(public payload: { snackbar: Snackbar, action?: any }) { }
}

export class DismissSnackbarAction implements Action {
    readonly type = SnackbarActionTypes.DISMISS;
}

export type SnackbarActions =
    OpenSnackbarAction |
    DismissSnackbarAction;
