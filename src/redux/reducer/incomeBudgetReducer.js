import {
  CREATE_INCOME_BUDGETS, LIST_INCOME_BUDGETS, DELETE_INCOME_BUDGET, EDIT_INCOME_BUDGET
} from '../type';

const incomeBudgets = ( budgets = [], action ) => {
  switch ( action.type ) {
    case CREATE_INCOME_BUDGETS:
      return [ action.payload, ...budgets ];

    case LIST_INCOME_BUDGETS:
      return action.payload;

    case DELETE_INCOME_BUDGET:
      return budgets.filter( budget => budget._id !== action.payload );

    case EDIT_INCOME_BUDGET:
      return budgets.map( budget => ( budget._id === action.payload._id ? action.payload : budget ) );

    default:
      return budgets;
  }
};

export default incomeBudgets;
