import React from 'react'
import './HeroBanner.css'
import { Link } from 'react-router-dom'
import Banner from './banner.png'

const HeroBanner = () => {
  return (
    <div className='container'>
      <div className="info">
        <p className='info1'>Fitness Club</p>
        <p className='info2'>Sweat, Smile <br /> And Repeat</p>
        <p className='info3'>Check out the most effective exercises
        personalized to you</p>
        <button className='button' href="#exercises">Explore Exercises</button>
        <p className='info4'>Exercises</p>
      </div>
      <div className='image'>
        <img src={Banner} alt="banner" className='banner'/>
      </div>
    </div>
  )
}

export default HeroBanner