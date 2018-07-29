import { Action } from '@ngrx/store';
import { User } from '../../model/user';

export enum AuthActionTypes {
    LOGIN = '[Auth] login',
    LOGIN_SUCCESS = '[Auth] login sucessful',
    LOGIN_FAILURE = '[Auth] login failed',
    GET_USER = '[Auth] get user',
    GET_USER_SUCCESS = '[Auth] success getting user',
    GET_USER_FAILURE = '[Auth] failed getting user',
    CHECK_SESSION = '[Auth] check session'
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

export class GetUserAction implements Action {
    readonly type = AuthActionTypes.GET_USER;
}

export class GetUserSuccessAction implements Action {
    readonly type = AuthActionTypes.GET_USER_SUCCESS;
    constructor(public payload: { user: User }) { }
}

export class GetUserFailureAction implements Action {
    readonly type = AuthActionTypes.GET_USER_FAILURE;
    constructor(public payload: { response: any }) { }
}

export class CheckSessionAction implements Action {
    readonly type = AuthActionTypes.CHECK_SESSION;
}

export type AuthActions =
    LoginAction |
    LoginSuccessAction |
    LoginFailureAction |
    GetUserAction |
    GetUserSuccessAction |
    GetUserFailureAction |
    CheckSessionAction;
