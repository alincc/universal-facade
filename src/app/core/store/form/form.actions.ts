import { Action } from '@ngrx/store';
import { MatDialogRef } from '@angular/material';

export enum FormActionTypes {
    SUBMIT = '[Form] submit form',
    SUBMIT_SUCCESS = '[Form] sucessfully submitted form',
    SUBMIT_FAILURE = '[Form] failed submitting form'
}

export class SubmitFormAction implements Action {
    readonly type = FormActionTypes.SUBMIT;
    constructor(public payload: { action: Action }) { }
}

export class SubmitFormSuccessAction implements Action {
    readonly type = FormActionTypes.SUBMIT_SUCCESS;
}

export class SubmitFormFailureAction implements Action {
    readonly type = FormActionTypes.SUBMIT_FAILURE;
    constructor(public payload: { error: any }) { }
}

export type FormActions =
    SubmitFormAction |
    SubmitFormSuccessAction |
    SubmitFormFailureAction;
