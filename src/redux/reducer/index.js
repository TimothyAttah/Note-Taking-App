import { combineReducers } from 'redux';
import incomeBudgets from './incomeBudgetReducer';
import expensesBudgets from './expensesBudgetReducer';
import notesReducer from './notesReducer'

export default combineReducers( {
  incomeBudgets,
  expensesBudgets,
  notesReducer
} );
