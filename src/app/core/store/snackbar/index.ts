import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromSnackbar from './snackbar.reducer';

export const selectSnackbarState = createFeatureSelector<fromSnackbar.SnackbarState>('snackbar');

export const selectSnackbarIsOpen = createSelector(selectSnackbarState, fromSnackbar.isSnackbarOpen);
export const selectSnackbarConfig = createSelector(selectSnackbarState, fromSnackbar.getSnackbarConfig);
