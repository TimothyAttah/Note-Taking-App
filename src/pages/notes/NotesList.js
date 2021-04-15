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
import { Favorite, ThumbDown, ThumbUp } from '@material-ui/icons';
import styled from 'styled-components';
import Menus from '../../Components/Menus';

const CardWrapper = styled.div`
  width: 500px;
  padding: 20px 10px;
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
       border: 2px solid red;
    }
    .MuiCardHeader-avatar {
      display: flex;
     
    }
  }
`;

const AvatarBox = styled.div`
 /* display: flex;
 flex-direction: column;
 height: 200px;
 position: absolute;
 top: 0;
 left: 0;
 justify-content: space-between;
      border: 2px solid red;
      h4 > span {
        padding-right: 6px;
      } */

  h4 > span {
    padding-right: 6px;
  }
`

const NotesList = () => {
  const dispatch = useDispatch();
  useEffect( () => {
    dispatch(getNotes())
  }, [ dispatch ] );
  
  const notes = useSelector( state => state.notesReducer.notes );
  console.log( notes );
 
          const nameToInitials =(fullName) => {
  const namesArray = fullName.trim().split(' ');
  if (namesArray.length === 1) return `${namesArray[0].charAt(0)}`;
            else return `${ namesArray[ 0 ].charAt( 0 ) }${ namesArray[ namesArray.length - 1 ].charAt( 0 ) }`;
  }
    
  return (
    <div>
      <h1>Note Lists</h1>
      {notes.length ? ( 
        notes.map( note => {
            const fullName = `${ note.postedBy && `${note.postedBy.firstName}` } ${ note.postedBy && `${note.postedBy.lastName}` }`
          return (
            <CardWrapper key={ note._id }>
              <Card style={{border: '1px solid #ccc', position: 'relative'}}>
                <CardHeader
                  avatar={
                    <AvatarBox>
                    <Avatar aria-label="notes" >
                     {nameToInitials(fullName)}
                    </Avatar>
                      <h4>
                        {fullName}
                      </h4>
                    </AvatarBox>
                    
                  }
                  
                  action={
                    <div>
                      <Menus note={ note } />
                    </div>
                  }
                  
                   title={ note.title }
                  subheader="September 14, 2021"
                />
                <CardContent style={{display: 'flex', justifyContent: 'center'}}>
                  <Typography variant="body2" color="textSecondary" component="p">
                    { note.content }
                  </Typography>
                </CardContent>
                <CardActions style={{display: 'flex', justifyContent: 'center'}}>
                  <IconButton aria-label="add to favorites">
                    <Favorite color='secondary' />
                  </IconButton>
                  <IconButton aria-label="likes">
                    <ThumbUp color='primary' />
                  </IconButton>
                  <IconButton aria-label="unLikes">
                    <ThumbDown color='primary' />
                  </IconButton>
                  <Link to={`/user/notes/read/${note._id}`}>
                    <Button variant='contained' size='small' color='primary'>
                      Read More...
                    </Button>
                  </Link>
                </CardActions>
                <CardContent style={{display: 'flex', justifyContent: 'center'}}>
                  <form>
                    <input placeholder='Add a comment' />
                  </form>
                </CardContent>
              </Card>
            </CardWrapper>
          )
        } )
      ) : ( <h2>You have no notes yet</h2> ) }
    </div>
  );
}

export default NotesList;
