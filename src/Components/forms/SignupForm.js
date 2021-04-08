import { Button } from '@material-ui/core'
import React from 'react'

const Signup = () => {
  return (
    <div>
      <form>
        <label htmlFor='firstName'>First Name</label>
        <input
          type='text'
          name='firstName'
          placeholder='Enter your first name'
        />
        <label htmlFor='lastName'>Last Name</label>
        <input
          type='text'
          name='lastName'
          placeholder='Enter your last name'
        />
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          placeholder='example@example.com'
        />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          placeholder='Enter your password'
        />
        <Button>Sign Up</Button>
      </form>
    </div>
  )
}

export default Signup
