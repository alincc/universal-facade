import { InjectionToken } from '@angular/core';
import { RouterStateSnapshot, Params } from '@angular/router';

import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';

import * as fromRouter from '@ngrx/router-store';

import { createSelector } from 'reselect';

import * as fromScaffold from './scaffold/scaffold.reducer';
import * as fromStore from './store.reducer';

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
  scaffold: fromScaffold.State;
  routerReducer: fromRouter.RouterReducerState;
}

export const reducers: ActionReducerMap<AppState> = {
  scaffold: fromScaffold.reducer,
  routerReducer: fromRouter.routerReducer
};

export const reducerToken = new InjectionToken<ActionReducerMap<AppState>>('Registered Reducers');

export const reducerProvider = [
  { provide: reducerToken, useValue: reducers }
];

export const metaReducers: MetaReducer<AppState>[] = [
  fromStore.universalMetaReducer
];

export const getScaffoldState = (state: AppState) => state.scaffold;
export const getScaffolding = createSelector(getScaffoldState, fromScaffold.getScaffolding);
export const getScaffold = (name: string) => createSelector([getScaffolding], (scaffolding) => scaffolding[name]);
