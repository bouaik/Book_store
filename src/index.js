import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';

const initialState = [
  {
    id: Math.floor(Math.random() * 10),
    title: 'Harry potter',
    category: 'Fantasy'
  },
  {
    id: Math.floor(Math.random() * 10),
    title: 'Alchemiste',
    category: 'Fiction'
  },
  {
    id: Math.floor(Math.random() * 10),
    title: 'Steve jobs',
    category: 'Biography'
  }
]

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

