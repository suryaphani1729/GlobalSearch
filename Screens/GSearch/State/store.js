 
import {applyMiddleware, createStore} from 'redux';
// import logger from 'redux-logger'
import thunk from "redux-thunk";
import appReducers from './index';

const initialState = {};

const store = createStore(appReducers,initialState,applyMiddleware(thunk));

export default store;