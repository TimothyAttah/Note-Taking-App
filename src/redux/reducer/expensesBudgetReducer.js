import {
  CREATE_EXPENSES_BUDGETS, LIST_EXPENSES_BUDGETS, DELETE_EXPENSES_BUDGET, EDIT_EXPENSES_BUDGET
} from '../type';

const initialState = {
  budgets: []
};

const expensesBudgets = ( state = initialState, action ) => {
  switch ( action.type ) {
    case CREATE_EXPENSES_BUDGETS:
      return {
        ...state,
        budgets: [ action.payload, ...state.budgets ]
      };
    case LIST_EXPENSES_BUDGETS:
      return {
        ...state,
        budgets: action.payload
      };
    case DELETE_EXPENSES_BUDGET:
      return {
        ...state,
        budgets: state.budgets.filter( budget => budget._id !== action.payload )
      };
    case EDIT_EXPENSES_BUDGET:
      return {
        ...state,
        budgets: state.budgets.map(budget => (budget._id === action.payload._id ? action.payload : budget))
      };
    default:
      return state;
  }
};

export default expensesBudgets;
