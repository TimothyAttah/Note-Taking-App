import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { listExpensesBudgets, deleteExpensesBudget } from '../../redux/actions/expensesBudgetActions';
import { CircularProgress } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';

const MainWrapper = styled.ul`
width: 500px;padding: 0;
margin: 0;
padding: 0;
`;
const UlWrapper = styled.ul`
padding: 0;
margin: 0;
list-style: none;
li {
  margin: 15px 0;
  border: 2px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

li span, li button {
  margin-left: 10px;
}

li button {
 :hover {
    opacity: 0.7;
    cursor: pointer;
  }
}
li h3 {
  margin: 0;
  padding: 0;
}
`;

const ExpensesTransaction = ({ expenses, setCurrentId }) => {
  const dispatch = useDispatch();
  useEffect( () => {
    dispatch( listExpensesBudgets() );
  }, [] );
  return (
    <MainWrapper>
      <h2>Expenses Transaction History</h2>
      <UlWrapper>
        { expenses.length ? (
          expenses.map( expense => {
            return (
              <li key={ expense._id }>
                <h3>
                  { `${ expense.content }:` }
                  <span>{ `$ ${ expense.values }` }</span>
                </h3>
                <div>
                  <button onClick={ () => dispatch( deleteExpensesBudget( expense._id ) ) } type="button"><Delete color='red' /></button>
                  <button type="button" onClick={ () => setCurrentId( expense._id ) }><Edit color='blue'/></button>
                </div>
              </li>
            );
          } )
        ) : (
          <div style={{width: '100%', border: '2px solid red', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
              <CircularProgress disableShrink/>
              <p>Loading...</p>
          </div>
        ) }
      </UlWrapper>
    </MainWrapper>
  );
};

ExpensesTransaction.propTypes = {
  expenses: PropTypes.array.isRequired,
  setCurrentId: PropTypes.func
};

export default ExpensesTransaction;
