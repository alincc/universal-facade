import { AuthActions, AuthActionTypes } from './auth.actions';
import { User } from '../../model/user';

export interface AuthState {
    processing: boolean;
    user: User;
    error: any;
}

export const initialState: AuthState = {
    processing: false,
    user: undefined,
    error: undefined
};

export function reducer(state = initialState, action: AuthActions): AuthState {
    switch (action.type) {
        case AuthActionTypes.LOGIN:
            return {
                ...state,
                processing: true,
                user: undefined,
                error: undefined
            };
        case AuthActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                processing: false,
                user: action.payload.user,
                error: undefined
            };
        case AuthActionTypes.LOGIN_FAILURE:
            return {
                ...state,
                processing: false,
                user: undefined,
                error: action.payload.error
            };
        default:
            return state;
    }
}

export const isLoginProcessing = (state: AuthState) => state.processing;
export const getLoginError = (state: AuthState) => state.error;
export const getUser = (state: AuthState) => state.user;
