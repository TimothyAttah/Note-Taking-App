import {
  CREATE_INCOME_BUDGETS, LIST_INCOME_BUDGETS, DELETE_INCOME_BUDGET, EDIT_INCOME_BUDGET
} from '../type';

import * as api from '../api';

export const createIncomeBudget = ( newIncome ) => async dispatch => {
  try {
    const { data } = await api.createIncome( newIncome );
    dispatch( {
      type: CREATE_INCOME_BUDGETS,
      payload: data.newIncome
    } );
  } catch ( error ) {
    console.log( error );
  }
};

export const listIncomeBudgets = () => async dispatch => {
  try {
    const { data } = await api.getIncome();
    dispatch( {
      type: LIST_INCOME_BUDGETS,
      payload: data
    } );
  } catch (error) {
    console.log( error );
  }
};

export const editIncomeBudget = ( id, updatedIncome ) => async dispatch => {
  try {
    const { data } = await api.updateIncome( id, updatedIncome );
    dispatch( {
      type: EDIT_INCOME_BUDGET,
      payload: data.updatedIncome
    } );
  } catch ( error ) {
    console.log( error );
  }
};

export const deleteIncomeBudget = ( id ) => async ( dispatch) => {
  try {
    await api.deleteIncome( id );
    dispatch( {
      type: DELETE_INCOME_BUDGET,
      payload: id
    } );
  } catch ( error ) {
    console.log( error );
  }
};
