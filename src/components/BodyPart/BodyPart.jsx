import React from 'react'
// import './BodyPart.css'
import Icon from '../../assets/gym.png'
import {Stack, Typography} from '@mui/material';

const BodyPart = ({item, bodyPart, setBodyPart}) => {

  // console.log(bodyPart === item)
  // console.log('bodyPart:', bodyPart);
  // console.log('item:', item);  

  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className='bodyPart-card'
      sx={{
          marginTop: '50px',
          borderTop: bodyPart === item ? '4px solid #FF2625' : '',
          backgroundColor: bodyPart === item ? "#FFE9E9" : '',
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
          width: '250px',
          height: '280px',
          cursor: 'pointer',
          gap: '47px'
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({top: 1800, left: 100, behavior: 'smooth'})
      }}
    >
      <img src={Icon} alt="dumbbell" 
        style={{width: '70px', height:'70px'}}
      />
      <Typography fontSize="20px" fontWeight="bold"
        color="#3A1212" textTransform="capitalize">
        {item}
      </Typography>
      
    </Stack>
  )
}

export default BodyPart