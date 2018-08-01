import { InjectionToken } from '@angular/core';
import { RouterStateSnapshot, Params } from '@angular/router';

import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import * as fromRouter from '@ngrx/router-store';

import * as fromAuth from './auth/auth.reducer';
import * as fromDialog from './dialog/dialog.reducer';
import * as fromSnackbar from './snackbar/snackbar.reducer';
import * as fromRootStore from './root-store.reducer';

export interface RouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
  data: any;
}

export class CustomRouterStateSerializer implements fromRouter.RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState;
    const params = routerState.root.params;
    const queryParams = routerState.root.queryParams;
    const data = routerState.root.data;
    return { url, params, queryParams, data };
  }
}

export interface AppState {
  auth: fromAuth.AuthState;
  dialog: fromDialog.DialogState;
  snackbar: fromSnackbar.SnackbarState;
  routerReducer: fromRouter.RouterReducerState;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: fromAuth.reducer,
  dialog: fromDialog.reducer,
  snackbar: fromSnackbar.reducer,
  routerReducer: fromRouter.routerReducer
};

export const reducerToken = new InjectionToken<ActionReducerMap<AppState>>('Registered Reducers');

export const reducerProvider = [
  { provide: reducerToken, useValue: reducers }
];

export const metaReducers: MetaReducer<AppState>[] = [
  fromRootStore.universalMetaReducer
];
