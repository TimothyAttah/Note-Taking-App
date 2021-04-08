import { Button, IconButton } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import React from 'react'
import Backdrop from '../../Components/Backdrop'
import Modal from '../../Components/modal/Modal'
import Nav from '../../Components/nav/Nav'
import SignupForm from '../../Components/forms/SignupForm'
import { Link } from 'react-router-dom'
import { images } from '../../Components/Images';
import styled, {css} from 'styled-components';

const CloseButton = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 1.5px;
`

const Subtitle = styled.h3`
  display: flex;
  justify-content: flex-start;
  color: #356DFB;
  text-transform: capitalize;
;
`

const Description = styled.small`
  color: #777;
  font-size: 18px;
  text-transform: capitalize;
   @media (max-width: 414px){
    font-size: 16px;
  }
  ${props => props.primary && css`
     display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  a {
    color: #356dfb;
    text-decoration: none;
    margin-left: 10px;
  }
  `}
   @media (max-width: 414px){
    font-size: 10px;
    font-weight: bold;
    a {
      margin-left: 4px;
    }
  }
`;

const ButtonWrapper = styled.div`
  a {
  position: relative;
  text-decoration: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 30px 0;
  }
  a > button {
  width: 100%;
  padding: 10px 0;
  background-color: crimson;
  color: #fff;
   @media (max-width: 414px){
    font-size: 10px;
  }
:hover {
  background-color: #073cc2;
  img {
     border: 1px solid #356DFB;
  }
}

span {
  justify-content: center;
   @media (max-width: 414px){
    margin-left: 20px;
  }
}
img {
  margin-right: 20px;
  position: absolute;
  left: 0;
  background-color: #fff;
  padding: 6px 10px;
  border: 1px solid crimson;
   @media (max-width: 414px){
    width: 22.5px;
  }
}
  }
`



const Signup = () => {
  return (
    <div>
      <Nav />
      <Backdrop />
      <Modal>
        <CloseButton><IconButton><Close/></IconButton></CloseButton>
        <Title>Note3Sixty</Title>
        <Subtitle>Create your account</Subtitle>
        <Description>Enter your personal details to start your journey today</Description>
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
        <SignupForm />
        <Description primary>Already have an account? <Link to='/user/signin'>Signin here</Link></Description>
      </Modal>
      
    </div>
  )
}

export default Signup
