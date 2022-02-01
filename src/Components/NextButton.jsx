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
    setModal,
    setTextModal,
  } = useContext(myContext);

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const maximumAlert = 'A parede não pode ter mais que 15 metros quadrados.';
  const minimumAlert = 'A parede não pode ter menos que 1 metro quadrado.';
  const errorDWAlert = 'O total de área das portas e janelas deve ser no máximo 50% da área de parede';
  const errorWallSize = 'A altura da parede que possui portas deve ser de no mínimo 220cm.'

  const handleClick = () => {
    switch (pathname) {
      case '/':
        navigate('/firstWall');
        break;
      case '/firstWall':
        const firstValidations = VerifyFirstWallMesures(
          heightOne, widthtOne, firstWindow, firstDoor, navigate
        );
        if (firstValidations === 'maximumAlert') {
          setTextModal(maximumAlert);
          setModal(true);
        };
        if (firstValidations === 'minimumAlert') {
          setTextModal(minimumAlert);
          setModal(true);
        };
        if (firstValidations === 'errorDWAlert') {
          setTextModal(errorDWAlert);
          setModal(true);
        }
        if (firstValidations === 'errorWallSize') {
          setTextModal(errorWallSize);
          setModal(true);
        }
        break;
      case '/secondWall':
        const secondValidations = VerifySecondWallMesures(
          heightTwo, widthtTwo, secondWindow, secondDoor, navigate
        );
        if (secondValidations === 'maximumAlert') {
          setTextModal(maximumAlert);
          setModal(true);
        };
        if (secondValidations === 'minimumAlert') {
          setTextModal(minimumAlert);
          setModal(true);
        };
        if (secondValidations === 'errorDWAlert') {
          setTextModal(errorDWAlert);
          setModal(true);
        }
        if (secondValidations === 'errorWallSize') {
          setTextModal(errorWallSize);
          setModal(true);
        }
        break;
      case '/thirdWall':
        const thirdValidations = VerifyThirdWallMesures(
          heightThree, widthtThree, thirdWindow, thirdDoor, navigate
        );
        if (thirdValidations === 'maximumAlert') {
          setTextModal(maximumAlert);
          setModal(true);
        };
        if (thirdValidations === 'minimumAlert') {
          setTextModal(minimumAlert);
          setModal(true);
        };
        if (thirdValidations === 'errorDWAlert') {
          setTextModal(errorDWAlert);
          setModal(true);
        }
        if (thirdValidations === 'errorWallSize') {
          setTextModal(errorWallSize);
          setModal(true);
        }
        break;
      case '/fourthWall':
        const fourthValidations = VerifyFourthWallMesures(
          heightFour, widthtFour, fourthWindow, fourthDoor, navigate
        );
        if (fourthValidations === 'maximumAlert') {
          setTextModal(maximumAlert);
          setModal(true);
        };
        if (fourthValidations === 'minimumAlert') {
          setTextModal(minimumAlert);
          setModal(true);
        };
        if (fourthValidations === 'errorDWAlert') {
          setTextModal(errorDWAlert);
          setModal(true);
        }
        if (fourthValidations === 'errorWallSize') {
          setTextModal(errorWallSize);
          setModal(true);
        }
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
