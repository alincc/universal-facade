import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { UsersActions, UsersActionTypes } from './users.actions';

import { User } from '../../model/user';

export interface UsersState extends EntityState<User> {
    loading: boolean;
    error: any;
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>({
    selectId: (user: User) => user.username,
});

export const initialState: UsersState = adapter.getInitialState({
    loading: false,
    error: undefined
});

export function reducer(state = initialState, action: UsersActions): UsersState {
    switch (action.type) {
        case UsersActionTypes.LOAD:
            return {
                ...state,
                loading: true,
                error: undefined
            };
        case UsersActionTypes.LOAD_SUCCESS:
            return adapter.addAll(action.payload.users, {
                ...state,
                loading: false,
                error: undefined
            });
        case UsersActionTypes.LOAD_FAILURE:
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

export const selectUsersIds = selectIds;
export const selectUsersEntities = selectEntities;
export const selectAllUsers = selectAll;
export const selectUsersTotal = selectTotal;

export const isUsersLoading = (state: UsersState) => state.loading;
export const getUsersError = (state: UsersState) => state.error;
