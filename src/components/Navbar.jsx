import React from 'react'
import logo from '../assets/Cat.gif'
import { Link } from 'react-router-dom'
import resume from '../assets/Resume.pdf'
import './Navbar.css'

const Navbar = () => {
  return (
    <div >
        <div className="navbar">
            <img src={logo} alt="Cat" width="120px" />
            <ul id='nav'>
                <Link to='/'><li>Home</li></Link>
                <Link to='/about'><li>About</li></Link>
                <Link to='/contact'><li>Contact</li></Link>
                <Link to='/project'><li>Projects</li></Link>
            </ul>
            <button> 
              <a href={resume} download='Job Alfredo F. Tan Resume.pdf'>Resume
              </a>
              </button>
      </div>

    </div>
  )
}

export default Navbar
