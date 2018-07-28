import { Action } from '@ngrx/store';
import { AlertRef } from './alert.reducer';

export enum AlertActionTypes {
    OPEN = '[Alert] open',
    CLOSE = '[Alert] close'
}

export class OpenAlertAction implements Action {
    readonly type = AlertActionTypes.OPEN;
    constructor(public payload: { alert: AlertRef, action?: any }) { }
}

export class CloseAlertAction implements Action {
    readonly type = AlertActionTypes.CLOSE;
}

export type AlertActions =
    OpenAlertAction |
    CloseAlertAction;
