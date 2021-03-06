import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

const getEnhancer = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return composeEnhancers(applyMiddleware(thunk));
}

export const configureStore = () => createStore(
  rootReducer,
  getEnhancer()
);

export {
  playersReceived,
  playerReceived
} from './actions';

export {
  getPlayerBykey
} from './reducer';