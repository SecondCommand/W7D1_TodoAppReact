import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './frontend/store/store.js';
import Root from './frontend/components/root.jsx';
import allTodos from './frontend/reducers/selectors.js';


document.addEventListener('DOMContentLoaded', () =>{
  const root = document.getElementById('root');

  const store = configureStore();
  window.store = store;
  window.allTodos = allTodos;
  ReactDOM.render(<Root store={store} />, root);
});
