import { DialogActions, DialogActionTypes } from './dialog.actions';
import { Type } from '@angular/core';

export interface DialogRef {
    ref: Type<any>;
    config: any;
}

export interface DialogState {
    open: boolean;
    config: any;
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
