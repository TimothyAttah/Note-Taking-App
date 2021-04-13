import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
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
import { Favorite, Share } from '@material-ui/icons';
import styled from 'styled-components';
import Menus from '../../Components/Menus';

const CardWrapper = styled.div`
  width: 500px;
  border: 1px solid #ccc;
  margin: 20px 10px;
  @media (max-width: 540px){
    width: 350px;
  }
  @media (max-width: 385px){
    width: 250px;
    .MuiCardActions-root {
      display: block;
      padding: 0;
    }
    button {
      font-size: 7px;
    }
    .MuiTypography-displayBlock {
      font-size: 11px;
    }
  }
`

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
        notes.map( note => {
          return (
            <CardWrapper key={ note._id }>
              <Card>
                <CardHeader
                  avatar={
                    <Avatar aria-label="notes">
                      R
                    </Avatar>
                  }
                  action={
                    <div>
                      <Menus note={ note } />
                    </div>
                  }
                  title={ note.title }
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
                  <Link to={`/user/notes/read/${note._id}`}>
                    <Button variant='contained' size='small' color='primary'>
                      Read More...
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </CardWrapper>
          );
        } )
      ) : ( <h2>You have no notes yet</h2> ) }
    </div>
  );
}

export default NotesList;
