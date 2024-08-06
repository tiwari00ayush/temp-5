import React, {useContext} from 'react'
import './HorizontalScrollBar.css'
import BodyPart from '../BodyPart/BodyPart'
import {Button} from '@mui/material'
import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu'
import RightArrowIcon from '../../assets/right-arrow.png'
import LeftArrowIcon from '../../assets/left-arrow.png';


const LeftArrow = () => {
  // const visibilityContext = useContext(VisibilityContext);
  // console.log('LeftArrow VisibilityContext:', visibilityContext);

  const {scrollPrev} = useContext(VisibilityContext);

  return (
    <Button onClick={() => scrollPrev()} className="left-arrow"> 
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Button>
  );
};

const RightArrow = () => {
  const {scrollNext} = useContext(VisibilityContext);
  

  return (
    <Button onClick={() => scrollNext()} className="right-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Button>
  );
};

const HorizontalScrollBar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <div className='scrollBar'
          key={item.ID || item}
          itemID={item.ID || item}
          target={item.ID || item}
        >
          <BodyPart item={item} bodyPart={bodyPart} 
            setBodyPart={setBodyPart}
          />
        </div>
      ))}
    </ScrollMenu>
  );
}

export default HorizontalScrollBar