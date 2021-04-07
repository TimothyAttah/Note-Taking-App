import { Divider, IconButton } from '@material-ui/core';
import React from 'react';
import Backdrop from '../../Components/Backdrop';
import Modal from '../../Components/modal/Modal'
import styled from 'styled-components';
import { Close} from '@material-ui/icons';
import NotesCreateForm from '../../Components/forms/NotesUpdateForm';
import history from '../../history';

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bolder;
`

const NotesUpdate = () => {
  return (
    <div>
      <Backdrop onClick={()=> history.push('/user/notes')} />
      <Modal>
        <Header>
          <p>Edit a note</p>
          <IconButton onClick={()=> history.push('/user/notes')}><Close /></IconButton>
        </Header>
        <Divider />
       <NotesCreateForm />
      </Modal>
    </div>
  );
}

export default NotesUpdate;
