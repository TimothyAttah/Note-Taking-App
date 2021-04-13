import { combineReducers } from 'redux';
import incomeBudgets from './incomeBudgetReducer';
import expensesBudgets from './expensesBudgetReducer';
import notesReducer from './notesReducer'
import todosReducer from './todosReducer';
import authReducer from './AuthReducer';

export default combineReducers( {
  incomeBudgets,
  expensesBudgets,
  notesReducer,
  todosReducer,
  authReducer
} );
