import React, { useState } from 'react';
import PropTypes from 'prop-types';
import myContext from './myContext';

function Provider({ children }) {
  const [name, setName] = useState('');

  const [heightOne, setHeightOne] = useState('');
  const [heightTwo, setHeightTwo] = useState('');
  const [heightThree, setHeightThree] = useState('');
  const [heightFour, setHeightFour] = useState('');

  const [widthtOne, setWidthtOne] = useState('');
  const [widthtTwo, setWidthtTwo] = useState('');
  const [widthtThree, setWidthtThree] = useState('');
  const [widthtFour, setWidthtFour] = useState('');

  const [firstWindow, setFirstWindow] = useState(0);
  const [secondWindow, setSecondWindow] = useState(0);
  const [thirdWindow, setThirdWindow] = useState(0);
  const [fourthWindow, setFourthWindow] = useState(0);

  const [firstDoor, setFirstDoor] = useState(0);
  const [secondDoor, setSecondDoor] = useState(0);
  const [thirdDoor, setThirdDoor] = useState(0);
  const [fourthDoor, setFourthDoor] = useState(0);

  const [footer, setFooter] = useState()

  const providerValue = {
    name,
    setName,
    heightOne,
    setHeightOne,
    heightTwo,
    setHeightTwo,
    heightThree,
    setHeightThree,
    heightFour,
    setHeightFour,
    widthtOne,
    setWidthtOne,
    widthtTwo,
    setWidthtTwo,
    widthtThree,
    setWidthtThree,
    widthtFour,
    setWidthtFour,
    firstWindow,
    setFirstWindow,
    secondWindow,
    setSecondWindow,
    thirdWindow,
    setThirdWindow,
    fourthWindow,
    setFourthWindow,
    firstDoor,
    setFirstDoor,
    secondDoor,
    setSecondDoor,
    thirdDoor,
    setThirdDoor,
    fourthDoor,
    setFourthDoor,
    footer,
    setFooter,
  };

  return (
    <myContext.Provider value={ providerValue }>
      { children }
    </myContext.Provider>
  )
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
