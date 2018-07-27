import {
    createSelector,
    createFeatureSelector
} from '@ngrx/store';

import * as fromAuth from './auth.reducer';

export const selectAuthState = createFeatureSelector<fromAuth.AuthState>('auth');

export const selectIsLoginProcessing = createSelector(selectAuthState, fromAuth.isLoginProcessing);
export const selectUser = createSelector(selectAuthState, fromAuth.getUser);
export const selectLoginError = createSelector(selectAuthState, fromAuth.getLoginError);
