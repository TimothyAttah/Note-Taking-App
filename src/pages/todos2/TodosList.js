import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { listTodos } from '../../redux/actions/todosActions'

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
`;

const TodosList = () => {
  const dispatch = useDispatch();
  const todos = useSelector( state => state.todosReducer.todos )
  useEffect( () => {
    dispatch(listTodos())
  },[dispatch])
  return (
    <div>
      <UlWrapper>
        { todos.length ? (
          todos.map( item => {
            return (
              <li key={ item.id }>{ item.todo }</li>
            )
          } )
        ) : ( <h2>You have nothing to do</h2> ) }
      </UlWrapper>
    </div>
  );
}

export default TodosList;
