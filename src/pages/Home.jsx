import React, { createContext } from 'react'
import { auth } from '../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

const Home = () => {
    const [ user ] = useAuthState(auth)

    return (
        <div>
          <img src={auth && user?.photoURL || ''} alt="" />
                <h1>{auth && user?.displayName}</h1>
                <p>{auth && user?.email}</p>
        </div>
      )
}

export default Home
