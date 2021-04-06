import React, {useRef, useState} from 'react';
import {Edit, Delete, Save, Clear} from '@material-ui/icons'

const TodosListItem = ( { item, onDelete, onEdit, id } ) => {
  const [ edit, setEdit ] = useState( false );
  const [ todo, setTodo ] = useState( item );
  
   const myRef = useRef()
  const handleDelete = () => {
    myRef.current.className = 'active';
    setTimeout( () => {
       onDelete()
    },200)
  }

  const handleSave = ( e ) => {
    if ( todo === '' ) {
      setTodo( item );
    } else {  
      setTodo( onEdit( todo, id ) );
    }
    setEdit( false );
  }

  const handleOnEdit = () => {
    setEdit(true)
  }

  const handleCancel = () => {
    setEdit( false );
  }
  if ( edit ) {
     return (
    <div>
         <li >
           <input
             type='text'
             value={ todo }
             name='todo'
             id='todo'
             onChange={(e)=> setTodo(e.target.value)}
           />
        <div className='row'>
             <Save titleAccess="Save" onClick={ handleSave }/>
          <Clear titleAccess='Cancel' onClick={ handleCancel}  />
        </div>
      </li>
    </div>
  )
  } else {
     return (
    
    <div>
      <li ref={myRef}>
        { item }
        <div className='row'>
          <Edit titleAccess="Edit" onClick={handleOnEdit} />
          <Delete titleAccess='Delete' onClick={ handleDelete}  />
        </div>
      </li>
    </div>
  )
  }
 
}

export default TodosListItem;
