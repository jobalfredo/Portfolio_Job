import React from 'react'
import Myface from '../assets/Myface.png'
import '../assets/Home.css'
const Home = () => {
  return (
    <div id='home'>
      <div>
        <h1>Hi I'm Job Tan </h1>
        <p>A Freelance software engineer</p>
      </div>

      <div>
        <img src={Myface} alt='myface' id='mfc1' />
      </div>
    </div>


  )
}

export default Home
