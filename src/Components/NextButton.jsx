import React, { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import myContext from '../Context/myContext';
import {
  VerifyFirstWallMesures,
  VerifySecondWallMesures,
  VerifyThirdWallMesures,
  VerifyFourthWallMesures,
} from '../Helpers/VerifyMesures';

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
    setModal,
    setTextModal,
  } = useContext(myContext);

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const maximumAlert = 'A parede não pode ter mais que 15 metros quadrados.';
  const minimumAlert = 'A parede não pode ter menos que 1 metro quadrado.';
  const errorDWAlert = 'O total de área das portas e janelas deve ser no máximo 50% da área de parede';
  const errorWallSize = 'A altura da parede que possui portas deve ser de no mínimo 220cm.'

  const verifyValidations = (error) => {
    switch (error) {
      case 'maximumAlert':
        setTextModal(maximumAlert);
        setModal(true);
        break;

      case 'minimumAlert':
        setTextModal(minimumAlert);
        setModal(true);    
        break;

      case 'errorDWAlert':
        setTextModal(errorDWAlert);
        setModal(true);
        break;
    
      case 'errorWallSize':
        setTextModal(errorWallSize);
        setModal(true);
        break;
    
      default:
        break;
    }
  };

  const handleClick = () => {
    switch (pathname) {
      case '/':
        navigate('/firstWall');
        break;
      case '/firstWall':
        const firstValidations = VerifyFirstWallMesures(
          heightOne, widthtOne, firstWindow, firstDoor, navigate
        );
        verifyValidations(firstValidations);
        break;
      case '/secondWall':
        const secondValidations = VerifySecondWallMesures(
          heightTwo, widthtTwo, secondWindow, secondDoor, navigate
        );
        verifyValidations(secondValidations);
        break;
      case '/thirdWall':
        const thirdValidations = VerifyThirdWallMesures(
          heightThree, widthtThree, thirdWindow, thirdDoor, navigate
        );
        verifyValidations(thirdValidations);
        break;
      case '/fourthWall':
        const fourthValidations = VerifyFourthWallMesures(
          heightFour, widthtFour, fourthWindow, fourthDoor, navigate
        );
        verifyValidations(fourthValidations);
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
