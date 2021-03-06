import React, { useContext } from 'react';
import myContext from '../Context/myContext';
import {
  Doors, HeightAndWidth, NextButton, Windows,
} from './index';

function SecondForm() {
  const {
    setHeightTwo,
    setWidthtTwo,
    setSecondWindow,
    setSecondDoor,
    heightTwo,
    widthtTwo,
  } = useContext(myContext);

  const handleHeight = ({ target: { value } }) => {
    setHeightTwo(value);
  };

  const handleWidth = ({ target: { value } }) => {
    setWidthtTwo(value);
  };

  const changeWindows = ({ target: { value } }) => {
    setSecondWindow(value);
  };

  const changeDoors = ({ target: { value } }) => {
    setSecondDoor(value);
  };

  const handles = {
    handleHeight,
    handleWidth,
    height: heightTwo,
    width: widthtTwo,
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

export default SecondForm;
