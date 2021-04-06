import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Avatar,
  Typography,
  IconButton,
  Button,
} from '@material-ui/core';
import {getNotes} from '../../redux/actions/notesActions'
import {  Favorite, Share } from '@material-ui/icons';
import Menus from '../../Components/Menus';

const NotesList = () => {
  const dispatch = useDispatch();
  useEffect( () => {
    dispatch(getNotes())
  }, [ dispatch ] );
  
  const notes = useSelector( state => state.notesReducer.notes );
  return (
    <div>
      <h1>Note Lists</h1>
      {notes.length ? (
        notes.map( (note, index) => {
          return (
            <>
              <Card key={ index } style={ { border: '2px solid #ccc', width: '350px', marginBottom: '20px' } }>
                <CardHeader
                  avatar={
                    <Avatar aria-label="notes">
                      R
                    </Avatar>
                  }
                  action={
                    <div>
                      <Menus note={note} />
                    </div>
                  }
                  title={ note.title }
                  key={ note.id }
                  subheader="September 14, 2021"
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                    { note.content }
                  </Typography>
                </CardContent>
                <CardActions >
                  <IconButton aria-label="add to favorites">
                    <Favorite color='secondary' />
                  </IconButton>
                  <IconButton aria-label="share">
                    <Share />
                  </IconButton>
                  <Button variant='contained' size='small' color='primary'>
                    Read More...
                  </Button>
                </CardActions>
              </Card>
            </>
          );
        } )
      ) : ( <h2>You have no notes yet</h2> ) }
    </div>
  );
}

export default NotesList;
