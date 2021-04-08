import React from 'react';
import { Button } from '@material-ui/core';
import styled from 'styled-components';

const FormContainer = styled.form`
  margin: 20px 0;
  label {
    font-weight: bolder;
  }
  input {
  display: block;
  width: 95%;
  padding: 15px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #DEDFEC;
  margin-top: 5px;
  margin-bottom: 20px;
  background: rgba(196, 196, 196, 0.05);
  ::placeholder{
    color: #BDBEC1;
  }
  @media (max-width: 414px){
    width: 88%;
  }
 }
  button {
  width: 100%;
  padding: 10px;
  background-color: #356DFB;
  color: #fff;
    :hover {
    background-color: #073cc2;
  }
}
`;

const Signin = () => {
  return (
    <>
      <FormContainer>
        <label htmlFor='email'>Email Address:</label>
        <input
          type='email'
          name='email'
          placeholder='example@example.com'
        />
        <label htmlFor='password'>Password:</label>
        <input
          type='password'
          name='password'
          placeholder='Enter your password'
        />
        <Button variant='contained'>Sign Up</Button>
      </FormContainer>
    </>
  );
};

export default Signin;
