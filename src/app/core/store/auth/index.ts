import {
    createSelector,
    createFeatureSelector
} from '@ngrx/store';

import * as fromAuth from './auth.reducer';

export const selectAuthState = createFeatureSelector<fromAuth.AuthState>('auth');

export const selectIsAuthenticated = createSelector(selectAuthState, fromAuth.isAuthenticated);
export const selectUser = createSelector(selectAuthState, fromAuth.getUser);
export const selectError = createSelector(selectAuthState, fromAuth.getError);
