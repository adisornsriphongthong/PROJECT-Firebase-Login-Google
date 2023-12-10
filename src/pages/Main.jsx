import React, { useEffect } from 'react'
import { NavLink,Outlet } from 'react-router-dom'
import { auth } from '../config/firebase'
import { signOut } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'

const main = () => {
    const [ user ] = useAuthState(auth)

    const signUserOut = async () => {
        await signOut(auth)
    }

    useEffect(() => {
        console.log(user?.displayName)
    })

  return (
    <div>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px'}}>
        <h1 style={{fontSize: '20px'}}>milo"</h1>
        <div>
            <header style={{display: 'flex', alignItems: 'center'}}>
                <div style={{margin: '5px'}}>
                   <NavLink style={{color: 'black', textDecoration: 'none'}} to={'/'}>Home</NavLink>
                </div>
                <div style={{margin: '5px'}}>
                   <NavLink style={{color: 'black', textDecoration: 'none'}} to={'login'}>Login</NavLink>
                </div>

                {user?.displayName && <div><button onClick={signUserOut}>Sign Out</button></div>}
            </header>
        </div>
      </div>

      <Outlet/>
    </div>
  )
}

export default main
