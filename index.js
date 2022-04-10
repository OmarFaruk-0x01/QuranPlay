/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import {LogBox} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {configureStore} from './src/Redux';
import {Provider} from 'react-redux';
LogBox.ignoreLogs(['Reanimated 2']);

const store = configureStore();
const REDUXAPP = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => REDUXAPP);
