import React, { useContext } from 'react';
import myContext from '../Context/myContext';
import {
  Doors, HeightAndWidth, NextButton, Windows,
} from './index';
import '../CSS/wallForms.css';

function ThirdForm() {
  const {
    heightThree,
    setHeightThree,
    widthtThree,
    setWidthtThree,
    setThirdWindow,
    setThirdDoor,
  } = useContext(myContext);

  const handleHeight = ({ target: { value } }) => {
    setHeightThree(value);
  };

  const handleWidth = ({ target: { value } }) => {
    setWidthtThree(value);
  };

  const changeWindows = ({ target: { value } }) => {
    setThirdWindow(value);
  };

  const changeDoors = ({ target: { value } }) => {
    setThirdDoor(value);
  };

  const handles = {
    handleHeight,
    handleWidth,
    height: heightThree,
    width: widthtThree,
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

export default ThirdForm;
