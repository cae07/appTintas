// Arquivo para funçoes de verificação de tamanho das paredes
import {
  VerifyFirstDoorWindow,
  VerifySecondDoorWindow,
  VerifyThirdDoorWindow,
  VerifyFourthDoorWindow,
} from './VerifyDoorsAndWindows';

const maximum = 150000;
const minimun = 10000;
const maximumAlert = 'A parede não pode ter mais que 15 metros quadrados.'
const minimumAlert = 'A parede não pode ter menos que 1 metro quadrado.'

const VerifyFirstWallMesures = (heightOne, widthtOne, firstWindow, firstDoor, navigate) => {
  const firstWall = Math.ceil(Number(heightOne) * Number(widthtOne));
  if (firstWall > maximum) {
    alert(maximumAlert);
    return navigate('/firstWall');
  }
  if (firstWall < minimun) {
    alert(minimumAlert);
    return navigate('/firstWall');
  }

  VerifyFirstDoorWindow(heightOne, widthtOne, firstWindow, firstDoor, navigate);
};

const VerifySecondWallMesures = (heightTwo, widthtTwo, secondWindow, secondDoor, navigate) => {
  const secondWall = Math.ceil(Number(heightTwo) * Number(widthtTwo));
  if (secondWall > maximum) {
    alert(maximumAlert);
    return navigate('/secondWall');
  }
  if (secondWall < minimun) {
    alert(minimumAlert);
    return navigate('/secondWall');
  }

  VerifySecondDoorWindow(heightTwo, widthtTwo, secondWindow, secondDoor, navigate);
};

const VerifyThirdWallMesures = (heightThree, widthtThree, thirdWindow, thirdDoor, navigate) => {
  const thirdWall = Math.ceil(Number(heightThree) * Number(widthtThree));
  if (thirdWall > maximum) {
    alert(maximumAlert);
    return navigate('/thirdWall');
  }
  if (thirdWall < minimun) {
    alert(minimumAlert);
    return navigate('/thirdWall');
  }

  VerifyThirdDoorWindow(heightThree, widthtThree, thirdWindow, thirdDoor, navigate);
};

const VerifyFourthWallMesures = (heightFour, widthtFour, fourthWindow, fourthDoor, navigate) => {
  const fourthWall = Math.ceil(Number(heightFour) * Number(widthtFour));
  if (fourthWall > maximum) {
    alert(maximumAlert);
    return navigate('/fourthWall');
  }
  if (fourthWall < minimun) {
    alert(minimumAlert);
    return navigate('/fourthWall');
  }

  VerifyFourthDoorWindow(heightFour, widthtFour, fourthWindow, fourthDoor, navigate);
};

export {
  VerifyFirstWallMesures,
  VerifySecondWallMesures,
  VerifyThirdWallMesures,
  VerifyFourthWallMesures,
};
