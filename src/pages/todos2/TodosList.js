import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import {IconButton } from '@material-ui/core';
import {Edit, Delete, Save, Cancel} from '@material-ui/icons'
import { useDispatch, useSelector } from 'react-redux';
import { listTodos, deleteTodo } from '../../redux/actions/todosActions'
import { useParams} from 'react-router-dom'
import './Todos.css';

const UlWrapper = styled.ul`
margin: 0;
padding: 0;
  li {
     list-style: none;
  margin: 15px 0;
  padding: 10px;
  text-transform: capitalize;
   box-shadow:  -5px -5px 5px #fff7,
               5px 5px 5px #0002;
  animation: opacity 0.2s linear;
  @keyframes opacity{
  from{
    opacity: 0;
    transform: scale(0.7);
  }
}
  }
   
   h2 {
      font-size: 2em;
  text-align: center;
  color: teal;
  margin-top: 50px;
  margin-bottom: 20px;
  text-transform: capitalize;
   }
`;

const LiContainer = styled.div`
  li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    padding: 0;
    margin-left: 10px;
    cursor: pointer;
    color: teal;
    :hover {
      color: crimson;
    }
  }
  }
`;

const TodosList = () => {
  const dispatch = useDispatch();
  const todos = useSelector( state => state.todosReducer.todos )
  const [ edit, setEdit ] = useState( false );
  const [ todo, setTodo ] = useState( todos.todo )
  const { id } = useParams();
  const editTodo = useSelector( state => id ? state.todosReducer.todos.find( todo => todo.id === id ) : null );

  console.log(editTodo);
  useEffect( () => {
    dispatch(listTodos())
  }, [ dispatch ] )

  useEffect( () => {
    if ( editTodo ) setTodo( editTodo.todo )
  }, [ id, editTodo ] );
  
  const myRef = useRef()
  const handleDelete = ( id ) => {
    setTimeout( () => {
      dispatch( deleteTodo( id ) )
    }, 200 ); 
  }

  const handleOnEdit = (id) => {
    setEdit( true )
  }
  if ( edit ) {
    return (
    <div>
      <UlWrapper>
        { todos.length ? (
          todos.map( item => {
            return (
              <LiContainer key={ item.id }>
              <li >
                <input
             type='text'
             value={ todo }
             name='todo'
             id='todo'
             onChange={(e)=> setTodo(e.target.value)}
           />
                <div>
                  <IconButton>
                    <Save titleAccess='Save' />
                  </IconButton>
                  <IconButton onClick={()=> handleDelete(item.id)}>
                    <Cancel titleAccess='Delete' />
                  </IconButton>
                </div>
                </li>
                </LiContainer>
            )
          } )
        ) : ( <h2>You have nothing to do</h2> ) }
      </UlWrapper>
    </div>
  );
  } else {
    return (
    <div>
      <UlWrapper>
        { todos.length ? (
          todos.map( item => {
            return (
              <LiContainer key={ item.id }>
                <li ref={ myRef }>
                  { item.todo }
                  <div>
                    {/* <Link to={`/user/todos/edit/${item.id}`}> */}
                    <IconButton onClick={()=> handleOnEdit()}>
                      <Edit titleAccess='Edit' />
                      </IconButton>
                      {/* </Link> */}
                    <IconButton onClick={ () => handleDelete( item.id ) }>
                      <Delete titleAccess='Delete' />
                    </IconButton>
                  </div>
                </li>
              </LiContainer>
            );
          } )
        ) : ( <h2>You have nothing to do</h2> ) }
      </UlWrapper>
    </div>
  );
  }
  
}

export default TodosList;
