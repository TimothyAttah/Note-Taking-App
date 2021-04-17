import { combineReducers } from 'redux';
import incomeBudgets from './incomeBudgetReducer';
import expensesBudgets from './expensesBudgetReducer';
import notesReducer from './notesReducer'
import todosReducer from './todosReducer';
import authReducer from './AuthReducer';
import userReducer from './userReducer';

export default combineReducers( {
  incomeBudgets,
  expensesBudgets,
  notesReducer,
  todosReducer,
  authReducer,
  userReducer
} );
