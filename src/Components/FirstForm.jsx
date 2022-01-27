import React, { useContext } from 'react';
import myContext from '../Context/myContext';
import {
  Doors, HeightAndWidth, NextButton, Windows,
} from './index';
import '../CSS/wallForms.css';

function FirstForms() {
  const {
    setHeightOne,
    setWidthtOne,
    setFirstWindow,
    setFirstDoor,
    heightOne,
    widthtOne,
  } = useContext(myContext);

  const handleHeight = ({ target: { value } }) => {
    setHeightOne(value);
  };

  const handleWidth = ({ target: { value } }) => {
    setWidthtOne(value);
  };

  const changeWindows = ({ target: { value } }) => {
    setFirstWindow(value);
  };

  const changeDoors = ({ target: { value } }) => {
    setFirstDoor(value);
  };

  const handles = {
    handleHeight,
    handleWidth,
    height: heightOne,
    width: widthtOne,
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

export default FirstForms;
