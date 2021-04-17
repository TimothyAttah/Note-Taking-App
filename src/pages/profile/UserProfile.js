import React, {useEffect, useState} from 'react';
import { Avatar, Divider } from '@material-ui/core';
import styled, { css } from 'styled-components';
import { user } from '../../App';
import { useDispatch, useSelector } from 'react-redux';
import { getNote } from '../../redux/actions/notesActions'
import {useParams} from 'react-router-dom'

const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-around;
  .MuiAvatar-root {
    width: 200px;
    height: 200px;
    h4 {
      font-size: 50px;
      text-transform: capitalize;
      color: teal;
    }
  }
`;

const ProfileRight = styled.div`
  h1 {
    padding-bottom: 2px;
    letter-spacing: 1px;
  }
  ${props => props.primary && css`
    display: flex;
    justify-content: space-between;
    padding-top: 40px;
    width: 500px;
    h4 {
      color: #777;
    }
    span {
      color: #000;
    }
  `}
`;

const ProfilePosts = styled.div`
  border: 2px solid red;
  width: 300px;
  height: 200px;
  padding: 20px;
  h2 {
    margin-bottom: 10px;
  }
`;

const UserProfile = () => {
  const dispatch = useDispatch()
  const [userProfile, setUserProfile] = useState(null)
  const { id } = useParams();
  useEffect( () => {
    dispatch( getNote() );
     fetch( `/api/auth/user/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer "+localStorage.getItem('jwt')
    }
  } ).then( res => res.json() )
    .then( data => {
      if ( data.error ) {
        console.log( data.error );
      } else {
        setUserProfile(data)
    }
    } ).catch( err => {
    console.log(err);
  })
  }, [ dispatch ] )
//  const notes = useSelector( state => state.notesReducer.notes.note );
  console.log( id );
  console.log( userProfile );
  
 
   const fullName = `${ userProfile &&  userProfile.user.firstName } ${ userProfile &&  userProfile.user.lastName }`
            function nameToInitials(fullName) {
  const namesArray = fullName.trim().split(' ');
  if (namesArray.length === 1) return `${namesArray[0].charAt(0)}`;
  else return `${namesArray[0].charAt(0)}${namesArray[namesArray.length - 1].charAt(0)}`;
}
  return (
    <>
      { userProfile ? (
        <ProfileContainer>
          <div>
            <h1>User Profile </h1>
            <Avatar>
              <h4>{ nameToInitials( fullName ) }</h4>
            </Avatar>
          </div>
          <ProfileRight>
            <h1>{ fullName }</h1>
            <h4>{ userProfile.user.email }</h4>
            { userProfile.posts && (
               <ProfileRight primary>
              <h4><span>{ userProfile.posts.length }</span> Posts</h4>
              <h4><span>160</span> Followers</h4>
              <h4><span>130</span> Following</h4>
            </ProfileRight>
          )}
          </ProfileRight>
        </ProfileContainer>
      ) : (
        <h2>User Loading</h2>
      ) }
      <Divider />
      <div>
        { userProfile ? (
          userProfile.posts.map( note => {
            return (
              <div style={{paddingBottom: '20px'}} key={ note._id }>
              <ProfilePosts >
                <h2>{ note.title }</h2>
                <p>{ note.content }</p>
                </ProfilePosts>
                </div>
            )
          } )
        ) : (
          <div>Loading...</div>
        ) }
      </div>
    </>
  );
}

export default UserProfile;
