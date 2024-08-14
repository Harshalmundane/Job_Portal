import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
// import Navbar from './components/shared/Navabr'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Home from './components/Home'
import Jobs from './components/Jobs'
import Browser from './components/Browser'
import Profile from './components/Profile'
import JobDescription from './components/JobDescription'


const appRoute=createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },
  {
    path:"/jobs",
    element:<Jobs/>
  },
  {
    path:"/browser",
    element:<Browser/>
  },
  {
    path:"profile",
    element:<Profile/>
  },
  {
    path:"/description/:id",
    element:<JobDescription/>
  }
])

function App() {

  return (
    <>
  <RouterProvider router={appRoute}></RouterProvider>
    </>
  )
}

export default App
