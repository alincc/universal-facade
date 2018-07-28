import {
    createSelector,
    createFeatureSelector
} from '@ngrx/store';

import * as fromAlert from './alert.reducer';

export const selectAlertState = createFeatureSelector<fromAlert.AlertState>('dialog');

export const selectAlertIsOpen = createSelector(selectAlertState, fromAlert.isAlertOpen);
export const selectAlertConfig = createSelector(selectAlertState, fromAlert.getAlertConfig);
