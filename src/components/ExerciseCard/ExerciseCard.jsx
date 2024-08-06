import React from 'react'
import {Link} from 'react-router-dom'
import {Button, Stack, Typography} from '@mui/material'
import './ExerciseCard.css'

    const ExerciseCard = ({exercise}) => {
    
    // console.log('ExerciseCard props:', exercise);

    // if (!exercise) {
    //     console.error('No exercise data provided');
    //     return null;
    // }

  return (
    <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} loading="lazy"/>
        <div className='button-desc'>
          <button>Hi</button>
        </div>
    </Link>
     
  )
}

export default ExerciseCard


