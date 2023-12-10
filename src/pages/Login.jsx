import React from 'react'
import { auth, provider } from '../config/firebase'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'

const Login = () => {
  const [ user ] = useAuthState(auth);

    const navigate = useNavigate();
    const signInWithGoogle = async () => {
        const result =await signInWithPopup(auth, provider);
        console.log(result);
        navigate('/')
    }
  return (
    <div>
      This is Login page
      <button onClick={signInWithGoogle}>login for continue</button>
      <h1>{user?.displayName}</h1>
    </div>
  )
}

export default Login
