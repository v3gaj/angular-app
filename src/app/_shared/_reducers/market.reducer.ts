import { MarketActions } from '../_actions';
import { SymbolTotal } from '../_classes/SymbolTotal.class';
import { TradeTypeTotal } from '../_classes/TradeTypeTotal.class';

export interface State {
    marketTotal: SymbolTotal[],
    tradeTypeTotal: TradeTypeTotal[]
}

export const initialState: State = {
    marketTotal: [],
    tradeTypeTotal: []
};

export function reducer(
    state = initialState,
    action: MarketActions.MarketActionsUnion
): State {
    switch (action.type) {
        case MarketActions.MarketActionsTypes.SetData: {
            let marketTotal = JSON.parse(JSON.stringify(state.marketTotal));
            let tradeTypeTotal = JSON.parse(JSON.stringify(state.tradeTypeTotal));

            const existingItemIndex = marketTotal.findIndex((symbolTotal: SymbolTotal) => symbolTotal.symbol === action.payload.symbol);

            if (existingItemIndex >= 0) {
                let bidTotal = (action.payload.bid_price * action.payload.order_quantity);
                let orderTotal = action.payload.order_quantity;
                marketTotal[existingItemIndex].bidTotal += bidTotal;
                marketTotal[existingItemIndex].orderTotal += orderTotal;
                marketTotal[existingItemIndex].totalTransactions += 1;
            } else {
                const symbolTotal: SymbolTotal = new SymbolTotal();
                symbolTotal.bidTotal = action.payload.bid_price;
                symbolTotal.orderTotal = action.payload.order_quantity;
                symbolTotal.symbol = action.payload.symbol;
                symbolTotal.totalTransactions = 1;
                marketTotal = [...marketTotal, symbolTotal];
            }
            const existingTypeItemIndex = tradeTypeTotal.findIndex((tradeItem: TradeTypeTotal) => tradeItem.tradeType === action.payload.trade_type);
            if (existingTypeItemIndex >= 0) {
                let bidTradeTotal = (action.payload.bid_price * action.payload.order_quantity);
                let orderTotal = action.payload.order_quantity;
                tradeTypeTotal[existingTypeItemIndex].bidTradeTotal += bidTradeTotal;
                tradeTypeTotal[existingTypeItemIndex].orderTotal += orderTotal;
                tradeTypeTotal[existingTypeItemIndex].totalTransactions += 1;
            } else {
                const tradeType: TradeTypeTotal = new TradeTypeTotal();
                tradeType.bidTradeTotal = action.payload.bid_price;
                tradeType.tradelTotal = action.payload.order_quantity;
                tradeType.tradeType = action.payload.trade_type;
                tradeType.totalTransactions = 1;
                tradeTypeTotal = [...tradeTypeTotal, tradeType];
            }

            return {
                ...state,
                marketTotal: marketTotal,
                tradeTypeTotal: tradeTypeTotal
            };
        }
        default: {
            return state;
        }
    }
}



