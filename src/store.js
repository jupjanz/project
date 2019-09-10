import { createStore,applyMiddleware } from 'redux'
import reducer from './reducers/index'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';


const middlewares = [thunk];
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer,composeWithDevTools(applyMiddleware(...middlewares)));

export default store