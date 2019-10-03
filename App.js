
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native';

//redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';

import { composeWithDevTools } from 'redux-devtools-extension';

//nav
import ShopNavigator from './navigation/ShopNavigator';

export default class App extends Component {

  render() {
    const store = createStore(
      reducers,
      composeWithDevTools()
    );

    return (
      <Provider store={store}>
        <StatusBar backgroundColor="#770733" />
        <ShopNavigator />
      </Provider>
    );
  }
}
