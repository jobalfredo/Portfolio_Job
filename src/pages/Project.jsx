import React from 'react'
import { Link } from 'react-router-dom'

const Project = () => {
  return (
    <div>
      <h1>My Projects</h1>
      <div className="projectlist">
        <ul>
         <Link to='/projectlist/calculator'><li>Calculator</li></Link>
         <Link to='/projectlist/Loginregister'><li>Login/Register</li></Link>
        </ul>
      </div>
    </div>
  )
}

export default Project
