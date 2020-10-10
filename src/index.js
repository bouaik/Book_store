import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import App from './components/App';

const initialState = {
  books: [
    {
      id: Math.floor(Math.random() * 10000),
      title: 'Harry potter',
      category: 'Fantasy',
    },
    {
      id: Math.floor(Math.random() * 10000),
      title: 'Alchemiste',
      category: 'Fiction',
    },
    {
      id: Math.floor(Math.random() * 10000),
      title: 'Steve jobs',
      category: 'Biography',
    },
  ],
};

const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
