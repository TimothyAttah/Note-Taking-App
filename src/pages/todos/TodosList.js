import React from 'react';
import TodosListItem from './TodosListItem';

const TodosList = ({todo, onDelete, onEdit, count}) => {
  return (
    <div>
      <ul>
        { todo.map( (item, index) => {
          return <TodosListItem
            item={ item.todo }
            key={ index }
            id={index}
            onDelete={ () => onDelete( index ) }
            onEdit={ onEdit }
          />
        })}
      </ul>
      <h2>You have { count } things to do</h2>
    </div>
  )
}

export default TodosList;
