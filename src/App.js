import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Header from './Components/header/Header';
import styled from 'styled-components';
import Home from './pages/home/Home';
import history from './history';
import Notes from './pages/notes/Notes';
import Todos from './pages/todos/Todos';
import Events from './pages/events/Events';
import Budget from './pages/budgets/Budgets';

const MainContainer = styled.main`
 *{
   box-sizing: border-box;
 }
 width: 100%;
 max-width: 1500px;
 border: 2px solid red;
 margin: 0 auto;
`

const App = () => {
  return (
    <MainContainer>
      <Router history={ history }>
        <Header />
        <Switch>
          <Route path='/' exact component={ Home } />
          <Route path='/user/notes' component={ Notes } />
          <Route path='/user/todos' component={ Todos } />
          <Route path='/user/events' component={ Events } />
          <Route path='/user/budgets' component={ Budget } />
        </Switch>
      </Router>
    </MainContainer>
  );
};

export default App;
