import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
   margin: 20px;
  height: 40px;
  width: 100%;

  input, button {
     width: 250px;
  height: 100%;
  border: none;
  outline: none;
  background: transparent;
  border-radius: 5px;
  padding: 0 5px;
  box-shadow: inset -5px -5px 5px #fff7,
              inset 5px 5px 5px #0002;
  }

  button {
     width: 80px;
  margin-left: 15px;
  letter-spacing: 2px;
  cursor: pointer;
  box-shadow:  -5px -5px 5px #fff7,
               5px 5px 5px #0002;
  }
`

const TodosForm = () => {
  const [ todo, setTodo ] = useState( '' );

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div>
      <FormContainer onSubmit={handleSubmit}>
        <input
          type='text'
          value={ todo }
          name='todo'
          onChange={(e)=> setTodo(e.target.value)}
        />
        <button>Submit</button>
      </FormContainer>
    </div>
  )
}

export default TodosForm;
