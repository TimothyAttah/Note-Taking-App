import { combineReducers } from 'redux';
import incomeBudgets from './incomeBudgetReducer';
import expensesBudgets from './expensesBudgetReducer';

export default combineReducers( {
  incomeBudgets,
  expensesBudgets,
} );
