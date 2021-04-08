import { Button } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import React from 'react'
import Backdrop from '../../Components/Backdrop'
import Modal from '../../Components/modal/Modal'
import Nav from '../../Components/nav/Nav'
import SignupForm from '../../Components/forms/SignupForm'
import { Link } from 'react-router-dom'
import { images } from '../../Components/Images';



const Signup = () => {
  return (
    <div>
      <Nav />
      <Backdrop />
      <Modal>
        <div><Close/></div>
        <h1>Note3Sixty</h1>
        <h3>Create <br /> your account</h3>
        <small>Enter your personal details to start your journey today</small>
        <Button variant='outlined'>
          <img src={ images.googleIcon } alt='' width='30px' />
          <span>Log in with Google</span>
        </Button>
        <div>
          <img src={ images.lineIcon } alt='' />
          <span>or</span>
          <img src={ images.lineIcon } alt='' />
        </div>
        <SignupForm />
        <small>Already have an account? <Link to='/user/signin'>Signin here</Link></small>
      </Modal>
      
    </div>
  )
}

export default Signup
