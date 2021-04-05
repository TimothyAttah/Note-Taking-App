import React from 'react';
import { Button, ButtonGroup } from '@material-ui/core';

export const Buttons = ({signIn, signUp}) => {
  return (
    <div>
       <ButtonGroup style={{backgroundColor: 'blue'}}>
        <Button style={{color: 'white'}}>{signUp}</Button>
        <Button style={{color: 'white'}}>{signIn}</Button>
      </ButtonGroup>
    </div>
  );
};
