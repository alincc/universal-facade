import { AlertActions, AlertActionTypes } from './alert.actions';
import { Type } from '@angular/core';

export interface AlertRef {
    ref: Type<any>;
    config: any;
}

export interface AlertState {
    open: boolean;
    config: any;
}

export const initialState: AlertState = {
    open: false,
    config: undefined
};

export function reducer(state = initialState, action: AlertActions): AlertState {
    switch (action.type) {
        case AlertActionTypes.OPEN:
            return {
                ...state,
                open: true,
                config: action.payload.alert.config
            };
        case AlertActionTypes.CLOSE:
            return {
                ...state,
                open: false,
                config: undefined
            };
        default:
            return state;
    }
}

export const isAlertOpen = (state: AlertState) => state.open;
export const getAlertConfig = (state: AlertState) => state.config;
