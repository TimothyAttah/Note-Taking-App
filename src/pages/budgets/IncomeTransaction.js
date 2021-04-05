import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Button, CircularProgress
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { listIncomeBudgets, deleteIncomeBudget } from '../../redux/actions/incomeBudgetActions';

const MainWrapper = styled.ul`
width: 500px;
padding: 0;
margin: 0;
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

const IncomeTransaction = ( { incomes, setIncomeId } ) => {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect( () => {
    dispatch( listIncomeBudgets() );
  }, [ dispatch ] );
  const handleDelete = ( id ) => {
    dispatch( deleteIncomeBudget( id ) );
    history.push( '/' );
  };
  return (
    <MainWrapper>
      <h2>Income Transaction  History</h2>
      <UlWrapper>
        { incomes.length ? (
          incomes.map( income => {
            return (
              <li key={ income._id }>
                <h3>
                  { `${ income.content }:` }
                  <span>{ `$ ${ income.values }` }</span>
                </h3>
                <div>
                  <Button onClick={ () => handleDelete( income._id ) } type="button" icon="trash" color="red" size="tiny" />
                  <Button type="button" icon="edit" color="blue" size="tiny" onClick={() => setIncomeId(income._id)} />
                </div>
              </li>
            );
          } )
        ) : (
          <div>
            <CircularProgress />
          </div>
        ) }
      </UlWrapper>
    </MainWrapper>
  );
};

IncomeTransaction.propTypes = {
  incomes: PropTypes.array.isRequired,
  setIncomeId: PropTypes.func
};

export default IncomeTransaction;
