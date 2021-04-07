import React from 'react';
import TodosForm from '../../Components/forms/TodosForms';
import TodosList from './TodosList';
import styled from 'styled-components';
import Nav from '../../Components/nav/Nav';

const MainContainer = styled.main`
   background-color: #e5e5e5;
  width: 100%;
  min-height: 100vh;
`

const TodosContainer = styled.div`
   width: 400px;
  min-height: 500px;
  position: absolute;
  top: 300px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 20px;
  box-shadow: 10px 10px 13px #0002,
              -10px -10px 13px #fff7;

  h1 {
    text-align: center;
  font-size: 2.5em;
  text-transform: uppercase;
  color: #e5e5e5;
  margin-bottom: 20px;
  text-shadow:  -3px -3px 3px #fff7,
               3px 3px 3px #0003;
  }
`

const Todos = () => {
  return (
    <>
      <Nav />
      <MainContainer>
        <TodosContainer>
          <TodosForm />
          <h1>To do List</h1>
          <TodosList />
        </TodosContainer>
      </MainContainer>
    </>
  );
}

export default Todos;
