import { AppBar, Toolbar, IconButton, Drawer} from '@material-ui/core';
import {  AddOutlined, Menu } from '@material-ui/icons';
import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { Buttons } from '../Buttons';
import { Navs } from '../helper/Helper'
import {
  NavWrapper,
  cName,
  Ul,
  BoxWrapper,
  SideNav
} from './NavStyles';


const Nav = () => {
  const [ open, setOpen ] = useState( false );
  const handleDrawer = () => {
    setOpen( true );
  }
  return (
    <div style={ { marginTop: '50px', marginBottom: '30px' } }>
      <AppBar position='sticky'  style={ { height: '58px', width: '100%', position: 'sticky', top: '0'} }>
        <Toolbar>
          <IconButton
            color='inherit'
            edge='start'
            aria-label='menu'
            onClick={ handleDrawer }
          >
            <Menu />
          </IconButton>
          <NavWrapper >
            <Ul>
              { Navs.map( ( nav, index ) => {
                return (
                  <li key={ index }><NavLink
                    to={ nav.path }
                    exact
                    activeStyle={ cName }
                  >{ nav.name } <span>{ nav.icon }</span></NavLink></li>
                )
              } ) }
            </Ul>
          </NavWrapper>
          <BoxWrapper>
            <Buttons signUp={ <AddOutlined /> } signIn='Create Notes' signinPath='/user/notes/create' signupPath='/user/notes/create' />
          </BoxWrapper>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor='left'
        open={ open }
        onClose={ () => setOpen( false ) }
      >
        <div style={ { height: '100%', width: '250px' } }>
          <SideNav>
            { Navs.map( ( sideNav, index ) => {
              return (
                <li key={ index }>
                  <NavLink
                    to={ sideNav.path }
                    activeStyle={ cName }
                  >
                    { sideNav.name }
                    <span>{ sideNav.icon }</span>
                  </NavLink>
                </li>
              )
            } ) }
          </SideNav>
        </div>
      </Drawer>
    </div>
  );
};

export default Nav;
