import React from 'react';
import styled, { css } from 'styled-components';
import { useSelector } from 'react-redux';

const IncomeExpenseBox = styled.div`
margin: 20px 0 !important;
  h3 {
    margin: 0;
  padding: 0;
  }
  span {
    margin-left: 10px;
  }
`;

const BudgetContainer = styled.div`
  background-color: ${props => (props.primary ? 'red' : 'green')};
  position: relative;
  width: 300px;
   padding: 10px !important;
   margin: 10px 0 !important;
  span {
    color: #fff;
    position: absolute;
    right: 10px;
    letter-spacing: 1.5px;
  }
  ${props => props.secondary && css`
      background-color: inherit;
      width: 350px;
      color: #fff;
      font-size: 30px;
      letter-spacing: 2px;
  `}
`;

const Balance = () => {
  const incomes = useSelector( state => state.incomeBudgets );
  const expenses = useSelector( state => state.expensesBudgets.budgets );
  const incomeTransaction = incomes.map( data => data.values );
  const expenseTransaction = expenses.map( data => data.values );
  const totalIncome = incomeTransaction.reduce( ( value, result ) => value += result, 0 ).toFixed( 2 );
  const totalExpenses = expenseTransaction.reduce( ( value, result ) => value += result, 0 ).toFixed( 2 );
  const totalBalance = (totalIncome - totalExpenses).toFixed(2);
  return (
    <div>
      <BudgetContainer secondary>
        <h1>Balance: <span>{ totalBalance > 1 ? `+ $${ totalBalance.toString().replace( /\B(?=(\d{3})+(?!\d))/g, ',' ) }` : ` $${ totalBalance.toString().replace( /\B(?=(\d{3})+(?!\d))/g, ',' ) }` }</span></h1>
      </BudgetContainer>
      <IncomeExpenseBox>
        <BudgetContainer>
          <h3> Income: <span> { totalIncome > 1 ? `+ $${ totalIncome.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }` : `$${ totalIncome.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }` }</span></h3>
        </BudgetContainer>
        <BudgetContainer primary>
          <h3> Expenses: <span> {totalExpenses > 1 ? `- $${ totalExpenses.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }` : `$${ totalExpenses.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }` }</span></h3>
        </BudgetContainer>
      </IncomeExpenseBox>
    </div>
  );
};

export default Balance;
