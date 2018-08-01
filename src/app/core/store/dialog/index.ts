import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromDialog from './dialog.reducer';

export const selectDialogState = createFeatureSelector<fromDialog.DialogState>('dialog');

export const selectDialogIsOpen = createSelector(selectDialogState, fromDialog.isDialogOpen);
export const selectDialogConfig = createSelector(selectDialogState, fromDialog.getDialogConfig);
