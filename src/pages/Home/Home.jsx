import React, {useState} from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import HeroBanner from '../../components/HeroBanner/HeroBanner'
import SearchExercises from '../../components/SearchExercises/SearchExercises'
import Exercises from '../../components/Exercises/Exercises'

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([])

  return (
    <div className='Container'>
      <HeroBanner />
      <SearchExercises 
        setExercises={setExercises} 
        bodyPart={bodyPart} 
        setBodyPart={setBodyPart}
      />
      <Exercises 
        exercises={exercises}
        setExercises={setExercises} 
        bodyPart={bodyPart} 
      />
    </div> 
  )
}

export default Home