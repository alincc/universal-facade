import { AuthActions, AuthActionTypes } from './auth.actions';
import { User } from '../../model/user';

export interface AuthState {
    processing: boolean;
    authenticated: boolean;
    user: User;
    error: any;
}

export const initialState: AuthState = {
    processing: false,
    authenticated: false,
    user: undefined,
    error: undefined
};

export function reducer(state = initialState, action: AuthActions): AuthState {
    switch (action.type) {
        case AuthActionTypes.LOGIN:
        case AuthActionTypes.GET_USER:
            return {
                ...state,
                processing: true,
                authenticated: false,
                user: undefined,
                error: undefined
            };
        case AuthActionTypes.LOGOUT:
            return {
                ...state,
                processing: true
            };
        case AuthActionTypes.LOGIN_SUCCESS:
        case AuthActionTypes.GET_USER_SUCCESS:
            return {
                ...state,
                processing: false,
                authenticated: true,
                user: action.payload.user,
                error: undefined
            };
        case AuthActionTypes.LOGOUT_SUCCESS:
            return {
                ...state,
                processing: false,
                authenticated: false,
                user: undefined,
                error: undefined
            };
        case AuthActionTypes.LOGOUT_FAILURE:
            return {
                ...state,
                processing: false,
                error: action.payload.response
            };
        case AuthActionTypes.LOGIN_FAILURE:
        case AuthActionTypes.GET_USER_FAILURE:
            return {
                ...state,
                processing: false,
                authenticated: false,
                user: undefined,
                error: action.payload.response
            };
        default:
            return state;
    }
}

export const isProcessing = (state: AuthState) => state.processing;
export const isAuthenticated = (state: AuthState) => state.authenticated;
export const getUser = (state: AuthState) => state.user;
export const getRole = (state: AuthState) => state.user.role;
export const getError = (state: AuthState) => state.error;
