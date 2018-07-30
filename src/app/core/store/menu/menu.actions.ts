import { Action } from '@ngrx/store';

import { MenuItem } from '../../model/menu';

export enum MenuActionTypes {
    LOAD = '[Menu] load menu',
    LOAD_SUCCESS = '[Menu] sucessfully loaded menu',
    LOAD_FAILURE = '[Menu] failed loading menu'
}

export class LoadMenuAction implements Action {
    readonly type = MenuActionTypes.LOAD;
}

export class LoadMenuSuccessAction implements Action {
    readonly type = MenuActionTypes.LOAD_SUCCESS;
    constructor(public payload: { menu: MenuItem[] }) { }
}

export class LoadMenuFailureAction implements Action {
    readonly type = MenuActionTypes.LOAD_FAILURE;
    constructor(public payload: { error: any }) { }
}

export type MenuActions =
    LoadMenuAction |
    LoadMenuSuccessAction |
    LoadMenuFailureAction;
