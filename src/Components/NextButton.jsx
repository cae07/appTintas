import React, { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import myContext from '../Context/myContext';
import {
  VerifyFirstWallMesures,
  VerifySecondWallMesures,
  VerifyThirdWallMesures,
  VerifyFourthWallMesures,
} from '../Helpers/VerifyMesures';
import '../CSS/forms.css';

function NextButton() {
  const {
    heightOne,
    heightTwo,
    heightThree,
    heightFour,
    widthtOne,
    widthtTwo,
    widthtThree,
    widthtFour,
    firstWindow,
    secondWindow,
    thirdWindow,
    fourthWindow,
    firstDoor,
    secondDoor,
    thirdDoor,
    fourthDoor,
  } = useContext(myContext);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleClick = () => {
    switch (pathname) {
      case '/':
        navigate('/firstWall');
        break;
      case '/firstWall':
        VerifyFirstWallMesures(heightOne, widthtOne, firstWindow, firstDoor, navigate);
        break;
      case '/secondWall':
        VerifySecondWallMesures(heightTwo, widthtTwo, secondWindow, secondDoor, navigate);
        break;
      case '/thirdWall':
        VerifyThirdWallMesures(heightThree, widthtThree, thirdWindow, thirdDoor, navigate);
        break;
      case '/fourthWall':
        VerifyFourthWallMesures(heightFour, widthtFour, fourthWindow, fourthDoor, navigate);
        break;
      default:
        break;
    }
  };

  return (
    <button
      type="button"
      onClick={ handleClick }
      className="form-buttons"
    >
      próximo
    </button>
  );
}

export default NextButton;
