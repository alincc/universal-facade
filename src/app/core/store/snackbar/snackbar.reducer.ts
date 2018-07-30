import { SnackbarActions, SnackbarActionTypes } from './snackbar.actions';
import { Type } from '@angular/core';

export type SnackbarPosition = 'top' | 'bottom';
export type SnackbarType = 'info' | 'success' | 'warning' | 'danger';

export type SnackbarConfig = Readonly<{
    duration?: number;
    panelClass?: string;
    verticalPosition?: SnackbarPosition;
}>;

export type InstanceConfig = Readonly<{
    type: SnackbarType;
    message: string;
}>;

export type Snackbar = Readonly<{
    ref: Type<any>;
    config: {
        snackbar: SnackbarConfig,
        instance: InstanceConfig
    }
}>;

export type SnackbarState = Readonly<{
    open: boolean;
    config: {
        snackbar: SnackbarConfig,
        instance: InstanceConfig
    }
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
