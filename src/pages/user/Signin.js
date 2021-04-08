import React from 'react';
import { Button, IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import Backdrop from '../../Components/Backdrop';
import Modal from '../../Components/modal/Modal';
import Nav from '../../Components/nav/Nav';
import SigninForm from '../../Components/forms/SigninForm';
import { Link } from 'react-router-dom';
import { images } from '../../Components/Images';
import {
  CloseButton,
  Title,
  Subtitle,
  Description,
  ButtonWrapper
} from './SigninSignupStyles';
import history from '../../history';


const Signin = () => {
  return (
    <>
      <Nav />
      <Backdrop onClick={()=> history.push('/')} />
      <Modal>
        <CloseButton><IconButton  onClick={()=> history.push('/')}><Close /></IconButton></CloseButton>
        <Title>Note3Sixty</Title>
        <Subtitle>Hello Welcome Back</Subtitle>
        <Description>Enter your personal details to sign in</Description>
        <ButtonWrapper>
          <Link to='/user/api/google'>
            <Button variant='contained' color='inherit'>
              <img src={ images.googleIcon } alt='' width='30px' />
              <span>Log in with Google</span>
            </Button>
          </Link>
        </ButtonWrapper>
        <div>
          <img src={ images.lineIcon } alt='' />
          <span>or</span>
          <img src={ images.lineIcon } alt='' />
        </div>
        <SigninForm />
        <Description primary>Don't have an account? <Link to='/user/signup'>Signup here</Link></Description>
      </Modal>
    </>
  );
};

export default Signin;
