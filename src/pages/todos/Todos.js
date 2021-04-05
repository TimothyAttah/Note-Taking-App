import React from 'react';
import TodosForm from '../../Components/forms/TodosForm';
import Nav from '../../Components/nav/Nav';
import './Todos.css';

const Todos = () => {
  return (
    <>
      <Nav />
      <div className='wrapper' >
        <div className='app'>
          <TodosForm />
          <h1>To do List</h1>
          <ul>
            <li>Cooking</li>
            <li>Reading</li>
            <li>Praying</li>
            <li>Working</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Todos;
