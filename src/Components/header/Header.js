import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BookOutlined} from '@material-ui/icons'
import { Buttons } from '../Buttons';

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
      <h1><Link to='/'>Note3Sixty<BookOutlined /></Link></h1>
      <Buttons signUp='SignUp' signIn='SignIn' />
    </NavContainer>
  );
};

export default Header;
