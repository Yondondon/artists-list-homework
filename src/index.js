import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import {createStore} from 'redux'

const initialStore = {
  artists: {
    data: [],
    loadedData: false,
  }
}

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const reducer = (state = initialStore, action) => {
  switch (action.type) {
    case "UPDATE_ARTISTS_LIST_LOADING": {
      return { ...state, artists: {...state.artists, loadedData: false }}
    }
    case "UPDATE_ARTISTS_LIST": {
      return { ...state, artists: {...state.artists, data: action.payload } }
    }
    case "UPDATE_ARTISTS_LIST_SUCCESS": {
      return { ...state, artists: {...state.artists, loadedData: true }}
    }
    case "UPDATE_ARTIST_ITEM": {
      return { ...state, artist_item: action.payload }
    }
    default:
      return state
  }
}

const store = createStore(reducer, reduxDevTools)

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
          <App />
      </React.StrictMode>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
