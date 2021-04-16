import React, {useEffect} from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Header from './Components/header/Header';
import styled from 'styled-components';
import Home from './pages/home/Home';
import history from './history';
import Notes from './pages/notes/Notes';
import Todos from './pages/todos2/Todos';
import Events from './pages/events/Events';
import Budget from './pages/budgets/Budgets';
import NotesDelete from './pages/notes/NotesDelete';
import NotesCreate from './pages/notes/NotesCreate';
import NotesUpdate from './pages/notes/NotesUpdate';
import NotesRead from './pages/notes/NotesRead';
import Signup from './pages/user/Signup';
import Signin from './pages/user/Signin';
import Profile from './pages/profile/Profile';

import { useDispatch } from 'react-redux';
import { getUsers } from './redux/actions/authActions'

export const user = JSON.parse(localStorage.getItem( 'user' ));

const MainContainer = styled.main`
 *{
   box-sizing: border-box;
   margin: 0;
   a {
     text-decoration: none;
     color: #fff;
   }
 }
 width: 100%;
 max-width: 1500px;
 border: 2px solid red;
 margin: 0 auto;
 font-family: 'Roboto', sans-serif;
`

const App = () => {
  const dispatch = useDispatch();
  useEffect( () => {
    if ( user ) {
      dispatch( getUsers() );
    } else {
      history.push('/user/signin')
    }
  }, [dispatch] );
  return (
    <MainContainer>
      <Router history={ history }>
        <Header />
        <Switch>
          <Route path='/' exact component={ Home } />
          <Route path='/user/signup' exact component={ Signup } />
          <Route path='/user/signin' exact component={ Signin } />
          <Route path='/user/notes' exact component={ Notes } />
          <Route path='/user/notes/delete/:noteId' component={ NotesDelete } />
          <Route path='/user/notes/edit/:id' component={ NotesUpdate } />
          <Route path='/user/notes/read/:id' component={ NotesRead } />
          <Route path='/user/notes/create' component={ NotesCreate } />
          <Route path='/user/profile' exact component={ Profile } />
          <Route path='/user/todos' exact component={ Todos } />
          <Route path='/user/todos/edit/:id' component={ Todos } />
          <Route path='/user/events' component={ Events } />
          <Route path='/user/budgets' component={ Budget } />
          { !user ? history.push( '/user/signin' ) : null }
        </Switch>
      </Router>
    </MainContainer>
  );
};

export default App;
