import { Action } from '@ngrx/store';
import { AppState } from './';

export const StoreActionTypes = {
    REHYDRATE: '[Store] rehydrate'
};

export class RehydrateAction implements Action {
    type = StoreActionTypes.REHYDRATE;
    constructor(public payload: AppState) {

    }
}

export type StoreActions =
    RehydrateAction;
