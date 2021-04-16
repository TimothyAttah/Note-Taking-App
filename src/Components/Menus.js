import React, { useState } from 'react';
import { Menu, MenuItem, IconButton } from '@material-ui/core'
import { MoreHoriz } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {ModalNav} from './helper/Helper'

const MenuBox = styled.div`
  margin: 0;
  :hover {
    background-color: #ccc
  }
  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 3px;
    color: #ccc;
    :hover{
      color: blue;
    }
  }

  a > span {
    margin-right: 10px;
  }
`

const Menus = ( { note } ) => {
   const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <IconButton aria-label="settings" onClick={ handleClick }>
        <MoreHoriz />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={ anchorEl }
        keepMounted
        open={ Boolean( anchorEl ) }
        onClose={ handleClose }
      >
        <MenuItem style={ {  padding: '0px', margin: '0px', display: 'block' } }>
          { ModalNav.map( (nav, index) => {
            return (
              <MenuBox key={index}>
                <Link to={`${nav.path}/${note._id}`}>
                  <span>{ nav.icon }</span>
                  { nav.name }
                </Link>
              </MenuBox>
            )
          } ) }
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Menus;
