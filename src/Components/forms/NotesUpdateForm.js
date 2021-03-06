import React, {useState, useEffect} from 'react'
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { Save } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux'
import {updateNote} from '../../redux/actions/notesActions'
import history from '../../history';
import { useParams } from 'react-router-dom';


const FormContainer = styled.form`
  box-sizing: border-box;
  margin-top: 50px;
  label {
    font-weight: bold;
  }
  input, textarea {
    width: 95%;
   display: block;
    margin: 5px 0;
    padding: 15px;
     border: 1px solid #ccc;
    outline: none;
    border-radius: 4px;
  }

  input {
    margin-bottom: 30px;
  }
  button {
    margin-top: 20px;
  }
`

const NotesUpdateForm = () => {
  const [ title, setTitle ] = useState( '' );
  const [ content, setContent ] = useState( '' );
  const dispatch = useDispatch();
  const { id } = useParams()
  
  const notes = useSelector( state => id ? state.notesReducer.notes.find( note => note.id === id ) : null );

  useEffect( () => {
    if ( notes ) setTitle( notes.title );
    if ( notes ) setContent( notes.content );
    console.log(id);
  }, [notes, id] );

  const handleSubmit = ( e ) => {
    e.preventDefault();
    const newNote = {
      title,
      content,
    }
    console.log( newNote );
     dispatch(updateNote(id, newNote))
    history.push( '/user/notes' );
    setTitle('')
    setContent( '' )
    
  }
  return (
    <div>
       <FormContainer onSubmit={handleSubmit}>
          <label htmlFor='title'>Note Title:</label>
          <input
            id='title'
            name='title'
          placeholder='Enter your note title'
          value={ title }
          onChange={(e) => setTitle(e.target.value)}
          />
        <label htmlFor='content'>Note Content:</label>
          <textarea
            id='content'
            name='content'
            rows={ 20 }
            cols={ 6 }
          placeholder='Enter your note contents here...'
          value={ content }
          onChange={(e) => setContent(e.target.value)}
          />
          <Button
            variant='contained'
            color='primary'
          size='medium'
          type='submit'
            startIcon={<Save />}
          >
            Create Note
          </Button>
        </FormContainer>
    </div>
  )
}

export default NotesUpdateForm;
