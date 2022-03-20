import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { PubNubAngular } from 'pubnub-angular2';
import * as fromShared from '../../_reducers/index';
import { MarketActions } from '../_actions';

@Injectable({
  providedIn: 'root'
})
export class MarketService {

  pubnub: PubNubAngular;
  channel: string;

  constructor(
    pubnub: PubNubAngular,
    public store: Store<fromShared.State>
  ) {
    this.channel = 'pubnub-market-orders';
    this.pubnub = pubnub;
    this.pubnub.init({
      subscribe_key: 'sub-c-4377ab04-f100-11e3-bffd-02ee2ddab7fe',
      uuid: 'uuid'
    });
    this.pubnub.subscribe({
      channels: [this.channel],
    });
  }

  initiateDataListener() {
    this.pubnub.addListener({
      message: (receivedMessage: { message: any; publisher: any; }) => {
        this.store.dispatch(new MarketActions.SetData(receivedMessage.message));
      }
    });
  }
}
