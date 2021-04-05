import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { createExpensesBudget, editExpensesBudget } from '../../redux/actions/expensesBudgetActions';
import { Check, Remove } from '@material-ui/icons';

const Form = styled.form`
margin: 5px 0;
  input, button {
    border: 2px solid red;
    outline-color: red;
    outline: none;
    padding: 10px;
    margin: 5px;
    border-radius: 10px;
  }
  #content {
    width: 400px;
  }
  #value {
    width: 200px;
  }
`;

const ExpensesTransactionForm = ({ currentId, setCurrentId }) => {
  const [ content, setContent ] = useState( '' );
  const [ values, setValues ] = useState( '' );
  const dispatch = useDispatch();
  const expenseBudgets = useSelector( state => ( currentId ? state.expensesBudgets.budgets.find( exp => exp._id === currentId ) : null ) );
  useEffect( () => {
    if ( expenseBudgets ) setContent( expenseBudgets.content );
    if ( expenseBudgets ) setValues( expenseBudgets.values );
  }, [ expenseBudgets ] );
  const handleSubmit = ( e ) => {
    e.preventDefault();
    const newExp = {
      content,
      values: parseInt( values )
    };
    if ( currentId ) {
      dispatch( editExpensesBudget( currentId, newExp ) );
    } else {
      dispatch( createExpensesBudget( newExp ) );
    }
    setContent( '' );
    setValues( '' );
    setCurrentId( null );
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <label><Remove style={ { color: 'red', fontWeight: 'bolder' } }/></label>
        <input type="text" placeholder="Enter your transactions" id="content" value={ content } onChange={ ( e ) => setContent( e.target.value ) } />
        <input type="number" placeholder="value" id="value" name="value" value={ values } onChange={ ( e ) => setValues( e.target.value ) } />
        <Button type="submit" color="secondary" variant='contained' size='medium' style={{padding: '5px 0'}}>
          <Check />
        </Button>
      </Form>
    </>
  );
};

ExpensesTransactionForm.propTypes = {
  currentId: PropTypes.string,
  setCurrentId: PropTypes.func
};

export default ExpensesTransactionForm;
