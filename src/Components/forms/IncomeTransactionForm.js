/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';

import { createIncomeBudget, editIncomeBudget } from '../../redux/actions/incomeBudgetActions';
import { Add, Check } from '@material-ui/icons';

const Form = styled.form`
  input, button {
    border: 2px solid green;
    outline-color: green;
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

const IncomeTransactionForm = ({ incomeId, setIncomeId }) => {
  const [ content, setContent ] = useState( '' );
  const [ values, setValues ] = useState( '' );
  const dispatch = useDispatch();
  const incomesBudgets = useSelector( state => ( incomeId ? state.incomeBudgets.find( inc => inc._id === incomeId ) : null ) );
  useEffect( () => {
    if ( incomeId ) setContent( incomesBudgets.content );
    if ( incomeId ) setValues( incomesBudgets.values );
  }, [incomeId, incomesBudgets ] );

  const handleSubmit = ( e ) => {
    e.preventDefault();
    const newInc = {
      content,
      values: parseInt( values ),
    };
    if ( incomeId ) {
      dispatch( editIncomeBudget( incomeId, newInc ) );
    } else {
      dispatch( createIncomeBudget( newInc ) );
    }

    setContent( '' );
    setValues( '' );
    setIncomeId( null );
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <label><Add style={ { color: 'green', fontWeight: 'bold' } }/></label>
        <input type="text" placeholder="Enter your transactions" id="content" value={ content } onChange={(e) => setContent(e.target.value)} />
        <input type="number" placeholder="value" id="value" value={ values } onChange={ ( e ) => setValues( e.target.value ) } />
        <Button type="submit" variant='contained' size='medium' style={{padding: '5px 0', backgroundColor: 'green', color: '#fff'}}>
          <Check />
        </Button>
      </Form>
    </div>
  );
};

IncomeTransactionForm.propTypes = {
  incomeId: PropTypes.string,
  setIncomeId: PropTypes.func
};

export default IncomeTransactionForm;
