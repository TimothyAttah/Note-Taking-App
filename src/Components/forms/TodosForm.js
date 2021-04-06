import React, {useState} from 'react';
import '../../pages/todos/Todos.css'

const TodosForm = ({onSubmit}) => {
  const [ todo, setTodo ] = useState( '' );
  const handleSubmit = (e) => {
    e.preventDefault()
    const newTodo = {
      id: Math.random(),
      todo
    }
    onSubmit( newTodo )
    console.log(newTodo);
    setTodo( '' );
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={ todo }
          name='todo'
          onChange={(e)=> setTodo(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default TodosForm;
