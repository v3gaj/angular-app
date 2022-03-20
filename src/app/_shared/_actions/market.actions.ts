import { Action } from '@ngrx/store';

export enum MarketActionsTypes {
    SetData = '[Market] Set Data',
}

export class SetData implements Action {
    readonly type = MarketActionsTypes.SetData;

    constructor(public payload: any) {}
}

export type MarketActionsUnion =
    | SetData;
