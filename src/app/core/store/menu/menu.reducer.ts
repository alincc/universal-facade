import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { MenuActions, MenuActionTypes } from './menu.actions';

import { MenuItem } from '../../model/menu';

export interface MenuState extends EntityState<MenuItem> {
    loading: boolean;
    error: any;
}

export const adapter: EntityAdapter<MenuItem> = createEntityAdapter<MenuItem>({
    selectId: (scaffold: MenuItem) => scaffold.gloss,
});

export const initialState: MenuState = adapter.getInitialState({
    loading: false,
    error: undefined
});

export function reducer(state = initialState, action: MenuActions): MenuState {
    switch (action.type) {
        case MenuActionTypes.LOAD:
            return {
                ...state,
                loading: true,
                error: undefined
            };
        case MenuActionTypes.LOAD_SUCCESS:
            return adapter.addAll(action.payload.menu, {
                ...state,
                loading: false,
                error: undefined
            });
        case MenuActionTypes.LOAD_FAILURE:
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

export const selectMenuItemIds = selectIds;
export const selectMenuItemEntities = selectEntities;
export const selectAllMenuItems = selectAll;
export const selectMenuItemTotal = selectTotal;

export const isMenuLoading = (state: MenuState) => state.loading;
export const getMenuError = (state: MenuState) => state.error;
