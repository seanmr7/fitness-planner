import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase.config'
import { signInWithEmailAndPassword } from 'firebase/auth'

function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const navigate = useNavigate()

  const { email, password } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)

      if (userCredential.user) {
        navigate('/')
      }
    } catch (error) {
      window.alert('Something went wrong')
    }
  }

  return (
    <div className='h-full'>
      <div className='container flex flex-col mx-auto justify-center justify-items-center items-center w-full md:w-3/4'>
        <h1 className='text-4xl text-center my-2'>Welcome Back!</h1>
        <h2 className='text-2xl text-center mb-3'>Sign in below</h2>
        <form onSubmit={onSubmit} className='w-3/4'>
          <input
            type='email'
            placeholder='Email'
            id='email'
            value={email}
            onChange={onChange}
            className='w-full input input-bordered input-primary mx-auto my-2'
            required
          />
          <input
            type='password'
            placeholder='Password'
            id='password'
            value={password}
            onChange={onChange}
            className='w-full input input-bordered input-primary mx-auto my-2'
            required
          />
          <div>
            <input
              type='submit'
              value='Sign In'
              className='btn btn-primary w-full mb-2'
            />
            <span className='text-sm font-light'>
              <Link to='/sign-up'>Sign Up Instead?</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignIn
