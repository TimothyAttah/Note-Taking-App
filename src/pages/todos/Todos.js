import React, {useState, useEffect} from 'react';
import TodosForm from '../../Components/forms/TodosForm';
import Nav from '../../Components/nav/Nav';
import './Todos.css';
import TodosList from './TodosList';

const Todos = () => {
  const [ state, setState ] = useState( 
    {
      data: [
    //       {
    //   id: 1,
    //   todo: 'Cooking'
    // },
    // {
    //   id: 2,
    //   todo: 'Praying'
    // },
    // {
    //   id: 3,
    //   todo: 'Eating'
    // },
    // {
    //   id: 4,
    //   todo: 'Working'
    // },
      ]
    }
  )
  
    localStorage.setItem('dataStore', JSON.stringify(state.data))

  useEffect( () => {
   
    const dataStore = JSON.parse( localStorage.getItem( 'dataStore' ) );
    if ( dataStore !== null ) {
      setState( {data: dataStore } );
    }
  }, [] )
  
  
  
 

  const onSubmit = ( todos ) => {
    setState({data: [todos, ...state.data]})
  }

  const handleDelete = ( index ) => {
    setState( {
      data: state.data.filter( ( item, i ) => {
      return i !== index
    }) })
  }

  const handleOnEdit = ( todo, index ) => {
    const { data } = state
    data.forEach( ( item, i ) => {
      if ( i === index ) {
        item.todo = todo;
      }
    } )
    setState( { data: data } );
  }
  return (
    <>
      <Nav />
      <div className='wrapper' >
        <div className='app'>
          <TodosForm onSubmit={onSubmit} />
          <h1>To do List</h1>
          { state.data.length === 0 ? <h2>Nothings to do</h2> : <TodosList
            todo={ state.data }
            onDelete={ handleDelete }
            onEdit={ handleOnEdit }
            count={state.data.length}
          />
          }
         
        </div>
      </div>
    </>
  );
};

export default Todos;
