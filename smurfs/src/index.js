import React from "react";
import ReactDOM from "react-dom";
import { 
  createStore, 
  combineReducers, 
  applyMiddleware 
} from 'redux';
import { Provider } from 'react-redux';
import { reducer as smurfsReducer } from './reducers/smurfs';
// import { reducer as addReducer } from './reducers/add';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import "./index.css";
import App from "./components/App";

const rootReducer = combineReducers({
  smurfs: smurfsReducer,
  // add: addReducer
});

const store = createStore(
  rootReducer, 
  applyMiddleware(
    thunk, logger
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById("root")
);
