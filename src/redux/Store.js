import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducer';
const initialState = {}

const middleware = [ thunk ];

const store = createStore( reducers, initialState, compose( applyMiddleware( ...middleware ) ) );

export default store;
