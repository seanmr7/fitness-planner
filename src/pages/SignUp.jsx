import { useState, useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth, db } from '../firebase.config'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { setDoc, doc, serverTimestamp } from 'firebase/firestore'

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const navigate = useNavigate()

  const { name, email, password, password2 } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    if (password !== password2) {
      window.alert('Passwords must match')
    } else {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        const user = userCredential.user

        updateProfile(auth.currentUser, {
          displayName: name,
        })

        const formDataCopy = { ...formData }
        delete formDataCopy.password
        delete formDataCopy.password2
        formDataCopy.timestamp = serverTimestamp()

        await setDoc(doc(db, 'users', user.uid), formDataCopy)

        navigate('/')
      } catch (error) {
        alert('Something went wrong')
        console.log(error)
      }
    }
  }

  return (
    <div className='h-full'>
      <div className='container flex flex-col mx-auto justify-center justify-items-center items-center w-full md:w-3/4'>
        <h1 className='text-4xl text-center my-2'>Sign Up</h1>
        <h2 className='text-2xl text-center mb-3'>and start tracking today!</h2>
        <form onSubmit={onSubmit} className='w-3/4'>
          <input
            type='text'
            placeholder='Your Name'
            id='name'
            value={name}
            onChange={onChange}
            className='w-full input input-bordered input-primary mx-auto my-2'
            required
          />
          <input
            type='email'
            placeholder='Your Email'
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
          <input
            type='password'
            placeholder='Confirm password'
            id='password2'
            value={password2}
            onChange={onChange}
            className='w-full input input-bordered input-primary mx-auto my-2'
            required
          />
          <div>
            <input
              type='submit'
              value='Sign Up'
              className='btn btn-primary w-full mb-2'
            />
            <span className='text-sm font-light'>
              <Link to='/sign-in'>Sign In Instead?</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp
