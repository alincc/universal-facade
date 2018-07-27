import { Action } from '@ngrx/store';

import { Scaffold } from '../../model/scaffold';

export enum ScaffoldActionTypes {
    LOAD = '[Scaffold] load scaffold',
    LOAD_SUCCESS = '[Scaffold] sucessfully loaded scaffold',
    LOAD_FAILURE = '[Scaffold] failed loading scaffold'
}

export class LoadScaffoldAction implements Action {
    readonly type = ScaffoldActionTypes.LOAD;
}

export class LoadScaffoldSuccessAction implements Action {
    readonly type = ScaffoldActionTypes.LOAD_SUCCESS;
    constructor(public payload: { scaffolding: Scaffold[] }) { }
}

export class LoadScaffoldFailureAction implements Action {
    readonly type = ScaffoldActionTypes.LOAD_FAILURE;
    constructor(public payload: { error: any }) { }
}

export type ScaffoldActions =
    LoadScaffoldAction |
    LoadScaffoldSuccessAction |
    LoadScaffoldFailureAction;
