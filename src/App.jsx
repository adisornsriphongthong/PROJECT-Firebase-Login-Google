import { useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import './App.css';

import Main from './pages/main';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main/>,
      children: [
        {
          index: true,
          element: <Home/>
        },
        {
          path: 'login',
          element: <Login/>
        }
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
