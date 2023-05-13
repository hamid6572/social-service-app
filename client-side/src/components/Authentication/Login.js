import { useRef } from 'react'

const Login = props => {
  const emailRef = useRef()
  const passwordRef = useRef()

  const signinHandler = () => {
    const userData = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    }
    props.signInHandler(userData)
  }

  return (
    <div className='sign-in-htm'>
      <br />
      <br /> <br />
      <br /> <br />
      <div className='group'>
        <label htmlFor='user' className='label'>
          Email
        </label>
        <input
          data-testid='loginemail'
          id='loginemail'
          type='email'
          placeholder='you@example.com'
          required=''
          ref={emailRef}
          className='input'
        />
      </div>
      <div className='group'>
        <label htmlFor='pass' className='label'>
          Password
        </label>
        <input
          data-testid='loginpassword'
          id='loginpassword'
          type='password'
          placeholder='••••••••'
          className='input'
          required=''
          minLength='8'
          ref={passwordRef}
        />
      </div>
      <div className='group'>
        <input
          data-testid='loginbutton'
          type='submit'
          className='button'
          defaultValue='Sign In'
          onClick={signinHandler}
        />
      </div>
    </div>
  )
}

export default Login
