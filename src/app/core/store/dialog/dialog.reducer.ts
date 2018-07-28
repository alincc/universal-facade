import { DialogActions, DialogActionTypes } from './dialog.actions';
import { Type } from '@angular/core';

export type DialogConfig = Readonly<{
    autofocus?: boolean;
    maxWidth?: string;
    maxHeight?: string;
    width?: string;
    height?: string;
}>;

export type InstanceConfig = Readonly<{
    title: string;
    scaffoldName?: string;
    submitLabel?: string;
    cancelLabel?: string;
}>;

export type Dialog = Readonly<{
    ref: Type<any>;
    config: {
        dialog: DialogConfig,
        instance: InstanceConfig
    };
}>;

export interface DialogState {
    open: boolean;
    config: {
        dialog: DialogConfig,
        instance: InstanceConfig
    };
}

export const initialState: DialogState = {
    open: false,
    config: undefined
};

export function reducer(state = initialState, action: DialogActions): DialogState {
    switch (action.type) {
        case DialogActionTypes.OPEN:
            return {
                ...state,
                open: true,
                config: action.payload.dialog.config
            };
        case DialogActionTypes.CLOSE:
            return {
                ...state,
                open: false,
                config: undefined
            };
        default:
            return state;
    }
}

export const isDialogOpen = (state: DialogState) => state.open;
export const getDialogConfig = (state: DialogState) => state.config;
