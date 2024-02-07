import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

//Reducer(s)
function toDoElement(state = [], action) {
 
    if (action.type === 'ELEMENT_TODO_ADD') {
      // update state
      return [...state, action.payload];
    }
  
    // always return state
    return state;
  };


//Store

const storeInstance = createStore(
    combineReducers({
      toDoElement,
    }),
    // count, // could absolutely have a single reducer
    // MIDDLEWARE
    applyMiddleware(logger)
  );


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>
);
