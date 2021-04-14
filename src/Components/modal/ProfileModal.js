import { Avatar, Button, IconButton, Menu, MenuItem } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import history from '../../history';
import { useDispatch } from 'react-redux'
import {logout} from '../../redux/actions/authActions'

const ProfileModal = () => {
  const dispatch = useDispatch()
  const [ auth, setAuth ] = useState( true );
  const [ anchorEl, setAnchorEl ] = useState( null );
  const open = Boolean( anchorEl );

  const handleMenu = ( event ) => {
    setAnchorEl( event.currentTarget );
  };

  const handleClose = () => {
    setAnchorEl( null );
  };

  const handleLogout = () => {
    localStorage.clear();
    dispatch(logout())
    history.push( '/user/signin' )
    window.location.reload( false );
  }
  return (
    <div>
      {auth && (
        <div>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={ handleMenu }
            color="inherit"
            style={ { padding: '0' } }
          >
            <h4 style={ { paddingRight: '15px', fontSize: '16px' } }>Patrick Stuart </h4>
            <Avatar> <AccountCircle /></Avatar>
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={ anchorEl }
            anchorOrigin={ {
              vertical: 'top',
              horizontal: 'right',
            } }
            keepMounted
            transformOrigin={ {
              vertical: 'top',
              horizontal: 'right',
            } }
            open={ open }
            onClose={ handleClose }
          >
            <MenuItem onClick={ handleClose }><Link to='/user/profile'>Profile</Link></MenuItem>
            <MenuItem onClick={ handleClose }>My account</MenuItem>
            <MenuItem onClick={ handleClose }><Button variant='contained' color='secondary' onClick={handleLogout}>Log Out</Button></MenuItem>
          </Menu>
        </div>
      ) }
    </div>
  );
};

export default ProfileModal;
