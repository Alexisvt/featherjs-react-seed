// @flow
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Sample from './components/sample/SamplePage';

import Subscriber from './common';

import { getMessages, newMessage } from './actions/messageActions';

import configureStore from './store/configureStore';

const store = configureStore();
store.dispatch(getMessages());

/* Subscribing to messages creations */
Subscriber.on('created', (message: MessageType) => {
  store.dispatch(newMessage(message));
});

ReactDOM.render(<Provider store={store}><Sample></Sample></Provider>, document.getElementById('app'));