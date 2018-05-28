import {createStore, applyMiddleware} from 'redux';
import rootReducers from '../reducers/root_reducers.js';
import logger from 'redux-logger';



const configureStore = () => createStore (rootReducers,
   applyMiddleware(logger));

export default configureStore;
