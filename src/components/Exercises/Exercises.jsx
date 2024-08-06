import React, {useState, useEffect} from 'react'
import './Exercises.css'
import Pagination from '@mui/material/Pagination'
// import {Box, Stack, Typography} from '@mui/material'
import {exerciseOptions, fetchData} from '../../utils/fetchData'
import ExerciseCard from '../ExerciseCard/ExerciseCard'

const Exercises = ({exercises, setExercises, bodyPart}) => {

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);
  
  return ( 
    <div id="exercises">
      <div>
        <p className='info5'>Showing Results</p>
      </div>
      <div className='name'>
          {exercises.map((exercise, index) => (
             <ExerciseCard 
                key = {index}
                exercise = {exercise}             
             />
          ))}
      </div>
    </div>
  )
}
 
export default Exercises