import React, {useEffect, useState} from 'react';
import { Avatar, Button, Divider } from '@material-ui/core';
import styled, { css } from 'styled-components';
import { user } from '../../App';
import { useDispatch, useSelector } from 'react-redux';
import { getNote } from '../../redux/actions/notesActions'
// import { followUser } from '../../redux/actions/userActions'
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
  ${props => props.button && css`
     padding: 20px 0;
     button {
        margin-right: 15px;
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
  const [ userProfile, setUserProfile ] = useState( null )
 
  const { id } = useParams();
  useEffect( () => {
    dispatch( getNote() );
    //  dispatch(followUser(id))
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
  }, [] )

   const userFollowing = useSelector( state => state.userReducer.following );
  const userFollowers = useSelector( state => state.userReducer.followers );
  const myFollows = useSelector( state => state.userReducer.authUser );

  const followUser = () => {
    fetch( '/api/auth/user/follow', {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer "+ localStorage.getItem('jwt')
      },
      body: JSON.stringify({followId: id})
    } ).then( res => res.json() )
      .then( data => {
       localStorage.setItem('users', JSON.stringify(data))
        setUserProfile( ( prevState ) => {
          return {
            ...prevState,
            user: {
              ...prevState.user,
              followers: [...prevState.user.followers, data._id]
            }
          }
        })
      } )
      .catch( err => {
      console.log(err);
    })
  }

  console.log( userProfile );
  console.log( myFollows );
  console.log(userFollowing);
  console.log(userFollowers);
  
 
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
                <h4><span>{userProfile.user && userProfile.user.followers.length}</span> Followers</h4>
              <h4><span>{userProfile.user && userProfile.user.following.length }</span> Following</h4>
            </ProfileRight>
            ) }
            <ProfileRight button>
            <Button variant='contained' color='secondary' onClick={() => followUser()}>Follow</Button>
              <Button variant='contained' color='secondary'>Unfollow</Button>
              </ProfileRight>
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
