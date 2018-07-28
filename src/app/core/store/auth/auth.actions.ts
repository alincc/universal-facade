import { Action } from '@ngrx/store';
import { User } from '../../model/user';

export enum AuthActionTypes {
    LOGIN = '[Auth] login',
    LOGIN_SUCCESS = '[Auth] login sucessful',
    LOGIN_FAILURE = '[Auth] login failed'
}

export class LoginAction implements Action {
    readonly type = AuthActionTypes.LOGIN;
    constructor(public payload: { username: string, password: string }) { }
}

export class LoginSuccessAction implements Action {
    readonly type = AuthActionTypes.LOGIN_SUCCESS;
    constructor(public payload: { user: User }) { }
}

export class LoginFailureAction implements Action {
    readonly type = AuthActionTypes.LOGIN_FAILURE;
    constructor(public payload: { response: any }) { }
}

export type AuthActions =
    LoginAction |
    LoginSuccessAction |
    LoginFailureAction;
