import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector} from 'react-redux'
import Nav from '../../Components/nav/Nav';

const NotesRead = () => {
  const { id } = useParams();
  const notes = useSelector( state => id ? state.notesReducer.notes.find( note => note.id === id ) : null );
  console.log(notes);
  return (
    <div>
      <Nav />
      {notes ? (
        <div>
          <h1>{ notes.title }</h1>
          <p>{ notes.content }</p>
        </div>
      ) : (<h2>Select a note to read</h2>)}
    </div>
  )
}

export default NotesRead;
