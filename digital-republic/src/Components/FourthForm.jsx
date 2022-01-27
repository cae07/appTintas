import React, { useContext } from 'react';
import myContext from '../Context/myContext';
import {
  Doors, HeightAndWidth, NextButton, Windows,
} from './index';
import '../CSS/wallForms.css';

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
      <Windows changeWindows={ changeWindows } />
      <Doors changeDoors={ changeDoors } />
      <NextButton />
    </form>
  );
}

export default FourthForm;
