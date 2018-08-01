import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromAuth from './auth.reducer';

export const selectAuthState = createFeatureSelector<fromAuth.AuthState>('auth');

export const selectIsCheckingSession = createSelector(selectAuthState, fromAuth.isCheckingSession);
export const selectIsLoggingIn = createSelector(selectAuthState, fromAuth.isLoggingIn);
export const selectIsLoggingOut = createSelector(selectAuthState, fromAuth.isLoggingOut);
export const selectIsGettingUser = createSelector(selectAuthState, fromAuth.isGettingUser);
export const selectIsAuthenticated = createSelector(selectAuthState, fromAuth.isAuthenticated);
export const selectUser = createSelector(selectAuthState, fromAuth.getUser);
export const selectLoginRedirect = createSelector(selectAuthState, fromAuth.getLoginRedirect);
export const selectError = createSelector(selectAuthState, fromAuth.getError);
