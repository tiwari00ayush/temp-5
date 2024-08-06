import React, {useState, useEffect} from 'react'
import './SearchExercises.css'
import { Link } from 'react-router-dom'
import {exerciseOptions, fetchData} from '../../utils/fetchData'
import HorizontalScrollBar from '../HorizontalScrollBar/HorizontalScrollBar'

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {
  const [search, setSearch] = useState('') 
  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
    const fetchExercisesData = async() =>{
      const bodyPartsData = await fetchData
      ('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      setBodyParts(['all', ...bodyPartsData]);
    }

    fetchExercisesData();
  }, [])

  const handleSearch = async() =>{
    if(search){
      const exercisesData = await fetchData
      ('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const searchedExercises = exercisesData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch('');
      setExercises(searchedExercises);
    }
  }

  console.log(bodyParts)

  return (
    <div className='box'>
      <div className='text'>
        <p>Awesome Exercises You <br />Should Know</p>
      </div>
      <div className='search'>
        <input 
          className='searchBox'
          type="text" 
          placeholder="Search Exercises"
          value={search}
          onChange={(e)=> setSearch(e.target.value.toLocaleLowerCase())}
        />
        <button 
          className='searchButton'
          onClick={handleSearch}
        >
            Search
        </button>
      </div>
      <div>
        <HorizontalScrollBar data={bodyParts}
        bodyPart={bodyPart} 
        setBodyPart={setBodyPart}/>
      </div>

    </div>
  )
}

export default SearchExercises