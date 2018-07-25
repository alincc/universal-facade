import {
    createSelector,
    createFeatureSelector
} from '@ngrx/store';

import { Scaffold } from '../../model/scaffold';

import * as fromScaffold from './scaffold.reducer';

export const selectScaffoldState = createFeatureSelector<fromScaffold.ScaffoldState>('scaffold');

export const selectScaffoldIds = createSelector(selectScaffoldState, fromScaffold.selectScaffoldIds);
export const selectScaffoldEntities = createSelector(selectScaffoldState, fromScaffold.selectScaffoldEntities);
export const selectAllScaffolds = createSelector(selectScaffoldState, fromScaffold.selectAllScaffolds);
export const selectScaffoldTotal = createSelector(selectScaffoldState, fromScaffold.selectScaffoldTotal);
export const selectScaffoldError = createSelector(selectScaffoldState, fromScaffold.getScaffoldError);
export const selectScaffoldIsLoading = createSelector(selectScaffoldState, fromScaffold.isScaffoldLoading);

export const selectScaffoldByName = (name: string) => createSelector(this.selectAllScaffolds, (scaffolding: Scaffold[]) => {
    return scaffolding ? scaffolding.find(scaffold => scaffold.name === name) : undefined;
});
