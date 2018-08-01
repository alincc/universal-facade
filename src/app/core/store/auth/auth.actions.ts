import { Action } from '@ngrx/store';

import { RouterNavigation } from '../router/router.actions';
import { User } from '../../model/user';

export enum AuthActionTypes {
    LOGIN = '[Auth] login',
    LOGIN_SUCCESS = '[Auth] login sucessful',
    LOGIN_FAILURE = '[Auth] login failed',
    LOGOUT = '[Auth] logout',
    LOGOUT_SUCCESS = '[Auth] logout success',
    LOGOUT_FAILURE = '[Auth] logout failed',
    GET_USER = '[Auth] get user',
    GET_USER_SUCCESS = '[Auth] success getting user',
    GET_USER_FAILURE = '[Auth] failed getting user',
    CHECK_SESSION = '[Auth] check session',
    SESSION_STATUS = '[Auth] session status',
    SET_LOGIN_REDIRECT = '[Auth] set login redirect',
    UNSET_LOGIN_REDIRECT = '[Auth] unset login redirect'
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

export class LogoutAction implements Action {
    readonly type = AuthActionTypes.LOGOUT;
}

export class LogoutSuccessAction implements Action {
    readonly type = AuthActionTypes.LOGOUT_SUCCESS;
    constructor(public payload: { message: string }) { }
}

export class LogoutFailureAction implements Action {
    readonly type = AuthActionTypes.LOGOUT_FAILURE;
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

export class SessionStatusAction implements Action {
    readonly type = AuthActionTypes.SESSION_STATUS;
    constructor(public payload: { authenticated: boolean }) { }
}

export class SetLoginRedirectAction implements Action {
    readonly type = AuthActionTypes.SET_LOGIN_REDIRECT;
    constructor(public payload: RouterNavigation) { }
}

export class UnsetLoginRedirectAction implements Action {
    readonly type = AuthActionTypes.UNSET_LOGIN_REDIRECT;
}

export type AuthActions =
    LoginAction |
    LoginSuccessAction |
    LoginFailureAction |
    LogoutAction |
    LogoutSuccessAction |
    LogoutFailureAction |
    GetUserAction |
    GetUserSuccessAction |
    GetUserFailureAction |
    CheckSessionAction |
    SessionStatusAction |
    SetLoginRedirectAction |
    UnsetLoginRedirectAction;
