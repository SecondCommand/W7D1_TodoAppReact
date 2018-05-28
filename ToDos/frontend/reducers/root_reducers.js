import {combineReducers} from 'redux';
import todosReducer from './todos_reducer.js';



const rootReducers = combineReducers({
  todos: todosReducer
});






export default rootReducers;
