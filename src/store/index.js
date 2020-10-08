import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { userReducer } from './reducer';

export default createStore(combineReducers({ user: userReducer }), {}, applyMiddleware(thunk));