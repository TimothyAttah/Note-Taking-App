import React from 'react';
import { Button, ButtonGroup } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const Buttons = ({signIn, signUp, signupPath, signinPath}) => {
  return (
    <div>
       <ButtonGroup  variant='contained' color='primary'>
        <Button ><Link to={signupPath}>{signUp}</Link></Button>
        <Button ><Link to={signinPath}>{signIn}</Link></Button>
      </ButtonGroup>
    </div>
  );
};
