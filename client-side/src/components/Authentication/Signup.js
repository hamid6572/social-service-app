import { useRef } from 'react'

const Signup = props => {
  const userName = useRef()
  const password = useRef()
  const email = useRef()

  const signupHandler = () => {
    let userData = {}
    userData = {
      username: userName.current.value,
      password: password.current.value,
      email: email.current.value
    }
    props.signUpHandler(userData)
  }

  return (
    <div className='sign-up-htm'>
      <br />
      <div className='group'>
        <label htmlFor='user' className='label'>
          Username
        </label>
        <input
          id='username'
          type='text'
          placeholder='username'
          required=''
          className='input'
          ref={userName}
        />
      </div>
      <div className='group'>
        <label htmlFor='pass' className='label'>
          Email Address
        </label>
        <input
          data-testid='signupemail'
          id='email'
          type='email'
          placeholder='you@example.com'
          required=''
          className='input'
          ref={email}
        />
      </div>
      <div className='group'>
        <label htmlFor='pass' className='label'>
          Password
        </label>
        <input
          data-testid='signuppassword'
          id='password'
          type='password'
          placeholder='••••••••'
          className='input'
          required=''
          minLength='8'
          ref={password}
        />
      </div>
      <div className='group'>
        <input
          data-testid='sigupbutton'
          type='submit'
          className='button'
          defaultValue='Sign Up'
          onClick={signupHandler}
        />
      </div>
      <div className='hr' />
      <div className='foot-lnk'>
        <label htmlFor='tab-1'>Already Member?</label>
      </div>
    </div>
  )
}

export default Signup
