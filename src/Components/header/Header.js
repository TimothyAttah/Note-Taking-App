import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MenuBook} from '@material-ui/icons'
import { Buttons } from '../Buttons';
import ProfileModal from '../modal/ProfileModal';
import { user } from '../../App';

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  top: 0;
  h1 {
    font-family: cursive;
    a {
      color:#000;
      text-decoration: none;
      display: flex;
      align-items: center;
       @media (max-width: 411px){
      justify-content: center;
      margin-bottom: 20px;
    }
    }
  }
  @media (max-width: 411px){
    display: block;
    text-align: center;
    button {
      font-size: 10px;
    }
  }
  @media (max-width: 280px){
    button{
    
    }
  }
`;



const Header = () => {
  return (
    <NavContainer>
      <h1><Link to='/'>Note3Sixty<MenuBook /></Link></h1>
      <div style={ { display: 'flex', alignItems: 'center' } }>
        { user ? (
          <ProfileModal />
        ) : (
          <Buttons signUp='SignUp' signIn='SignIn' signupPath='/user/signup' signinPath='/user/signin' />
        ) }
      </div>
    </NavContainer>
  );
};

export default Header;
