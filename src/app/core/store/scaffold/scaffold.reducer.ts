import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { ScaffoldActions, ScaffoldActionTypes } from './scaffold.actions';

import { Scaffold } from '../../model/scaffold';

export interface ScaffoldState extends EntityState<Scaffold> {
    loading: boolean;
    error: any;
}

export const adapter: EntityAdapter<Scaffold> = createEntityAdapter<Scaffold>({
    selectId: (scaffold: Scaffold) => scaffold.name,
});

export const initialState: ScaffoldState = adapter.getInitialState({
    loading: false,
    error: undefined
});

export function reducer(state = initialState, action: ScaffoldActions): ScaffoldState {
    switch (action.type) {
        case ScaffoldActionTypes.LOAD:
            return {
                ...state,
                loading: true,
                error: undefined
            };
        case ScaffoldActionTypes.LOAD_SUCCESS:
            return adapter.addAll(action.payload.scaffolding, {
                ...state,
                loading: false,
                error: undefined
            });
        case ScaffoldActionTypes.LOAD_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
}

const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

export const selectScaffoldIds = selectIds;
export const selectScaffoldEntities = selectEntities;
export const selectAllScaffolds = selectAll;
export const selectScaffoldTotal = selectTotal;

export const isScaffoldLoading = (state: ScaffoldState) => state.loading;
export const getScaffoldError = (state: ScaffoldState) => state.error;
