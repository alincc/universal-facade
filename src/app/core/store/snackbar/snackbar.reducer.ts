import { SnackbarActions, SnackbarActionTypes } from './snackbar.actions';
import { Type } from '@angular/core';

export type SnackbarType = 'info' | 'success' | 'warning' | 'danger';

export type SnackbarConfig = Readonly<{
    timeout: number;
    panelClass?: string;
    type: SnackbarType;
    message: string;
}>;

export type Snackbar = Readonly<{
    ref: Type<any>;
    config: SnackbarConfig;
}>;

export type SnackbarState = Readonly<{
    open: boolean;
    config: SnackbarConfig;
}>;

export const initialState: SnackbarState = {
    open: false,
    config: undefined
};

export function reducer(state = initialState, action: SnackbarActions): SnackbarState {
    switch (action.type) {
        case SnackbarActionTypes.OPEN:
            return {
                ...state,
                open: true,
                config: action.payload.snackbar.config
            };
        case SnackbarActionTypes.DISMISS:
            return {
                ...state,
                open: false,
                config: undefined
            };
        default:
            return state;
    }
}

export const isSnackbarOpen = (state: SnackbarState) => state.open;
export const getSnackbarConfig = (state: SnackbarState) => state.config;
