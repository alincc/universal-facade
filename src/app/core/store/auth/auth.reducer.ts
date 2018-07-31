import { AuthActions, AuthActionTypes } from './auth.actions';
import { User } from '../../model/user';

export interface AuthState {
    authenticated: boolean;
    user: User;
    error: any;
}

export const initialState: AuthState = {
    authenticated: false,
    user: undefined,
    error: undefined
};

export function reducer(state = initialState, action: AuthActions): AuthState {
    switch (action.type) {
        case AuthActionTypes.LOGIN_SUCCESS:
        case AuthActionTypes.GET_USER_SUCCESS:
            return {
                ...state,
                authenticated: true,
                user: action.payload.user
            };
        case AuthActionTypes.LOGOUT_SUCCESS:
            return {
                ...state,
                authenticated: false,
                user: undefined
            };
        case AuthActionTypes.LOGOUT_FAILURE:
            return {
                ...state,
                error: action.payload.response
            };
        case AuthActionTypes.LOGIN_FAILURE:
        case AuthActionTypes.GET_USER_FAILURE:
            return {
                ...state,
                error: action.payload.response
            };
        default:
            return state;
    }
}

export const isAuthenticated = (state: AuthState) => state.authenticated;
export const getUser = (state: AuthState) => state.user;
export const getError = (state: AuthState) => state.error;
