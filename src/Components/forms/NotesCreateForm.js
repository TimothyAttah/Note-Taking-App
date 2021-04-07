import React, {useState} from 'react'
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { Save } from '@material-ui/icons';
import { useDispatch } from 'react-redux'


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

const NotesCreateForm = () => {
  return (
    <div>
       <FormContainer>
          <label htmlFor='title'>Note Title:</label>
          <input
            id='title'
            name='title'
            placeholder='Enter your note title'
          />
        <label htmlFor='content'>Note Content:</label>
          <textarea
            id='content'
            name='content'
            rows={ 20 }
            cols={ 6 }
            placeholder='Enter your note contents here...'
          />
          <Button
            variant='contained'
            color='primary'
            size='medium'
            startIcon={<Save />}
          >
            Create Note
          </Button>
        </FormContainer>
    </div>
  )
}

export default NotesCreateForm
