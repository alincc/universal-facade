import { Action } from '@ngrx/store';

import { Scaffold } from '../../model/scaffold';
import { Update } from './scaffold.reducer';

export const ScaffoldActionTypes = {
    UPDATE: '[Scaffold] update scaffold',
    LOAD: '[Scaffold] load scaffold',
    LOAD_SUCCESS: '[Scaffold] sucessfully loaded scaffold',
    LOAD_FAILURE: '[Scaffold] failed loading scaffold'
};

export class UpdateScaffoldAction implements Action {
    type = ScaffoldActionTypes.UPDATE;
    constructor(public payload: Update) {

    }
}

export class LoadScaffoldAction implements Action {
    type = ScaffoldActionTypes.LOAD;
    constructor(public payload?: any) {

    }
}

export class LoadScaffoldSuccessAction implements Action {
    type = ScaffoldActionTypes.LOAD_SUCCESS;
    constructor(public payload: Map<string, Scaffold>) {

    }
}

export class LoadScaffoldFailureAction implements Action {
    type = ScaffoldActionTypes.LOAD_FAILURE;
    constructor(public payload: any) {

    }
}

export type ScaffoldActions =
    UpdateScaffoldAction |
    LoadScaffoldAction |
    LoadScaffoldSuccessAction |
    LoadScaffoldFailureAction;
