import { Action } from '@ngrx/store';
import { SdrCollection } from '../../model/sdr/sdr-collection';

export enum UsersActionTypes {
    LOAD = '[Users] load users',
    LOAD_SUCCESS = '[Users] sucessfully loaded users',
    LOAD_FAILURE = '[Users] failed loading users'
}

export class LoadUsersAction implements Action {
    readonly type = UsersActionTypes.LOAD;
}

export class LoadUsersSuccessAction implements Action {
    readonly type = UsersActionTypes.LOAD_SUCCESS;
    constructor(public payload: { collection: SdrCollection }) { }
}

export class LoadUsersFailureAction implements Action {
    readonly type = UsersActionTypes.LOAD_FAILURE;
    constructor(public payload: { error: any }) { }
}

export type UsersActions =
    LoadUsersAction |
    LoadUsersSuccessAction |
    LoadUsersFailureAction;
