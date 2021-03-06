import React, { useContext } from 'react';
import myContext from '../Context/myContext';
import {
  Doors, HeightAndWidth, NextButton, Windows,
} from './index';

function FourthForm() {
  const {
    heightFour,
    setHeightFour,
    widthtFour,
    setWidthtFour,
    setFourthWindow,
    setFourthDoor,
  } = useContext(myContext);

  const handleHeight = ({ target: { value } }) => {
    setHeightFour(value);
  };

  const handleWidth = ({ target: { value } }) => {
    setWidthtFour(value);
  };

  const changeWindows = ({ target: { value } }) => {
    setFourthWindow(value);
  };

  const changeDoors = ({ target: { value } }) => {
    setFourthDoor(value);
  };

  const handles = {
    handleHeight,
    handleWidth,
    height: heightFour,
    width: widthtFour,
  };

  return (
    <form className="walls-container">
      <HeightAndWidth handleFunctions={ handles } />
      <div className="radios-container">
        <Windows changeWindows={ changeWindows } />
        <Doors changeDoors={ changeDoors } />
      </div>
      <NextButton />
    </form>
  );
}

export default FourthForm;
