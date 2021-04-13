import React from 'react';
import { Avatar } from '@material-ui/core';
import styled, {css} from 'styled-components';

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

const Profile = () => {
  return (
    <>
      <ProfileContainer>
        <div>
           <h1>User Profile </h1>
        <Avatar>
         <h4>P S</h4>
        </Avatar>
        </div>
        <ProfileRight>
          <h1>Patrick Stuart</h1>
          <h4>patrick@gmail.com</h4>
          <ProfileRight primary>
            <h4><span>80</span> Posts</h4>
            <h4><span>160</span> Followers</h4>
            <h4><span>130</span> Following</h4>
          </ProfileRight>
        </ProfileRight>
      </ProfileContainer>

    </>
  )
}

export default Profile;
