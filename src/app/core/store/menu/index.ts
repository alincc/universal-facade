import {
    createSelector,
    createFeatureSelector
} from '@ngrx/store';

import * as fromMenu from './menu.reducer';

export const selectMenuState = createFeatureSelector<fromMenu.MenuState>('menu');

export const selectMenuItemIds = createSelector(selectMenuState, fromMenu.selectMenuItemIds);
export const selectMenuItemEntities = createSelector(selectMenuState, fromMenu.selectMenuItemEntities);
export const selectAllMenuItems = createSelector(selectMenuState, fromMenu.selectAllMenuItems);
export const selectMenuItemTotal = createSelector(selectMenuState, fromMenu.selectMenuItemTotal);
export const selectMenuError = createSelector(selectMenuState, fromMenu.getMenuError);
export const selectMenuIsLoading = createSelector(selectMenuState, fromMenu.isMenuLoading);
