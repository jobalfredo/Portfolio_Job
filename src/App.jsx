import React from 'react'
// import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Project from './pages/Project'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import PLL from './layout/ProjectListLayout'
import Calculator from './components/Calculator/Calculator'
import Loginregister from './components/Login/Loginsignup'


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='About' element={<About />} />
        <Route path='Contact' element={<Contact />} />
        <Route path='project' element={<Project />} />

      <Route path='/ProjectList/' element={<PLL/>}>
        <Route path='Calculator' element={<Calculator />} />
        <Route path='Loginregister' element={<Loginregister />} />
      </Route>
      </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
    
  )
}

export default App
