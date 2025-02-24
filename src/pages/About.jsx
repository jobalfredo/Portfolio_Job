import React from 'react'
import python from'../assets/python.png'
import backend from'../assets/backend.png'
import '../assets/about.css'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
    <h1></h1>
    <div className='pharagraph'>
      <p>Graduated from San Beda University as a Bachelor in Science in Business Administrator Major in Marketing Management,</p>
      <p>With some experience on creating VBA language in excel to use as a daily excercise for(filter button, print as) in my past job</p>
      <p>and the help of my friends i develop my skills in react, js, python, html5 and css.</p>
      <p>I used coursera to get some certification</p>
   
    </div>
    <div>
      <h2>Here are some of my certifications and my projects</h2>
      <div className="Certificate">
        <img src={python}/>
        <img src={backend}/>
        <Link to='/project'><li>Projects</li></Link>
      </div>
      
    </div>
    </div>
  )
}

export default About
