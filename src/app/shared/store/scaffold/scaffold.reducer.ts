import { ScaffoldActions, ScaffoldActionTypes } from './scaffold.actions';

import { Scaffold } from '../../model/scaffold';

export interface Update {
  scaffold: string;
  property: string;
  attribute: string;
  value: any;
}

export interface State {
  loaded: boolean;
  loading: boolean;
  scaffolding: Map<string, Scaffold>;
}

const initialState: State = {
  loaded: false,
  loading: false,
  scaffolding: new Map<string, Scaffold>()
};

export function reducer(state = initialState, action: ScaffoldActions): State {
  switch (action.type) {
    case ScaffoldActionTypes.UPDATE:
      const update = action.payload;
      const scaffold = state.scaffolding[update.scaffold];
      if (scaffold) {
        for (const property of scaffold.properties) {
          if (property.name === update.property) {
            property[update.attribute] = update.value;
            break;
          }
        }
      }
      return Object.assign({}, state);
    case ScaffoldActionTypes.LOAD:
      return Object.assign({}, state, {
        loading: true
      });
    case ScaffoldActionTypes.LOAD_SUCCESS:
      return Object.assign({}, state, {
        loaded: true,
        loading: false,
        scaffolding: action.payload
      });
    case ScaffoldActionTypes.LOAD_FAILURE:
      return Object.assign({}, state, {
        loaded: true,
        loading: false,
        scaffolding: new Map<string, Scaffold>()
      });
    default:
      return state;
  }
}

export const isLoaded = (state: State) => state.loaded;
export const isLoading = (state: State) => state.loading;
export const getScaffolding = (state: State) => state.scaffolding;
