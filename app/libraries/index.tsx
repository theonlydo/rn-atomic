import AsyncStorage from '@react-native-async-storage/async-storage';
import logger from 'redux-logger';
import {NavigationContainer} from '@react-navigation/native';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {persistStore, persistReducer} from 'redux-persist';
import {applyMiddleware, createStore, combineReducers} from 'redux';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {PersistGate} from 'redux-persist/integration/react';
import DeviceInfo from 'react-native-device-info';

export {
  AsyncStorage,
  logger,
  thunk,
  composeWithDevTools,
  applyMiddleware,
  createStore,
  persistStore,
  persistReducer,
  combineReducers,
  createStackNavigator,
  TransitionPresets,
  NavigationContainer,
  Provider,
  PersistGate,
  DeviceInfo,
};
