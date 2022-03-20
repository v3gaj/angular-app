import { createSelector, createFeatureSelector, ActionReducerMap } from '@ngrx/store';

import * as fromMarket from './market.reducer';
import * as fromRoot from '../../_reducers/index';

export interface SharedState {
    market: fromMarket.State;
}

export interface State extends fromRoot.State {
    shared: SharedState;
}

export const reducers: ActionReducerMap<SharedState, any> = {
    market: fromMarket.reducer
};

export const getSharedState = createFeatureSelector<State, SharedState>('shared');
export const getMarketTotal = createSelector(getSharedState, (state) => state.market.marketTotal);
export const getTradeTypeTotal = createSelector(getSharedState, (state) => state.market.tradeTypeTotal);

