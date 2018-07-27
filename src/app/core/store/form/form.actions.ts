import { Action } from '@ngrx/store';

export enum FormActionTypes {
    SUBMIT = '[Form] submit form',
    SUBMIT_SUCCESS = '[Form] sucessfully submitted form',
    SUBMIT_FAILURE = '[Form] failed submitting form'
}

export class SubmitFormAction implements Action {
    readonly type = FormActionTypes.SUBMIT;
    constructor(public payload: { submit: any, success: any, failure: any, data?: any }) { }
}

export class SubmitFormSuccessAction implements Action {
    readonly type = FormActionTypes.SUBMIT_SUCCESS;
    constructor(public payload: { response: any }) { }
}

export class SubmitFormFailureAction implements Action {
    readonly type = FormActionTypes.SUBMIT_FAILURE;
    constructor(public payload: { error: any }) { }
}

export type FormActions =
    SubmitFormAction |
    SubmitFormSuccessAction |
    SubmitFormFailureAction;
