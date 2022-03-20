import * as fromRouter from '@ngrx/router-store';
import { ActionReducerMap, ActionReducer, MetaReducer, Action } from '@ngrx/store';

export interface State {
    router: fromRouter.RouterReducerState;
}

export const reducers: ActionReducerMap<State> = {
    router: fromRouter.routerReducer
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
    return (state: State | undefined, action: Action): any => {
        const result = reducer(state, action);
        console.groupCollapsed(action.type);
        console.log('Prev State', state);
        console.log('Action', action);
        console.log('Next State', result);
        console.groupEnd();

        return result;
    };
}

export const metaReducers: MetaReducer<State>[] = [logger];

