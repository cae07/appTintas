// Arquivo para funçoes de verificação de tamanho das paredes
import {
  VerifyFirstDoorWindow,
  VerifySecondDoorWindow,
  VerifyThirdDoorWindow,
  VerifyFourthDoorWindow,
} from './VerifyDoorsAndWindows';

const maximum = 150000;
const minimun = 10000;

const VerifyFirstWallMesures = (heightOne, widthtOne, firstWindow, firstDoor, navigate) => {

  const firstWall = Math.ceil(Number(heightOne) * Number(widthtOne));
  if (firstWall > maximum) {
    return 'maximumAlert';
  }
  if (firstWall < minimun) {
    return 'minimumAlert';
  }

  const verifydoors = VerifyFirstDoorWindow(heightOne, widthtOne, firstWindow, firstDoor, navigate);
  return verifydoors;
};

const VerifySecondWallMesures = (heightTwo, widthtTwo, secondWindow, secondDoor, navigate) => {
  const secondWall = Math.ceil(Number(heightTwo) * Number(widthtTwo));
  if (secondWall > maximum) {
    return 'maximumAlert';
  }
  if (secondWall < minimun) {    
    return 'minimumAlert';
  }

  const verifydoors = VerifySecondDoorWindow(heightTwo, widthtTwo, secondWindow, secondDoor, navigate);
  return verifydoors;
};

const VerifyThirdWallMesures = (heightThree, widthtThree, thirdWindow, thirdDoor, navigate) => {
  const thirdWall = Math.ceil(Number(heightThree) * Number(widthtThree));
  if (thirdWall > maximum) {
    return 'maximumAlert';
  }
  if (thirdWall < minimun) {    
    return 'minimumAlert';
  }

  const verifydoors = VerifyThirdDoorWindow(heightThree, widthtThree, thirdWindow, thirdDoor, navigate);
  return verifydoors;
};

const VerifyFourthWallMesures = (heightFour, widthtFour, fourthWindow, fourthDoor, navigate) => {
  const fourthWall = Math.ceil(Number(heightFour) * Number(widthtFour));
  if (fourthWall > maximum) {
    return 'maximumAlert';
  }
  if (fourthWall < minimun) {
    return 'minimumAlert';
  }

  const verifydoors = VerifyFourthDoorWindow(heightFour, widthtFour, fourthWindow, fourthDoor, navigate);
  return verifydoors;
};

export {
  VerifyFirstWallMesures,
  VerifySecondWallMesures,
  VerifyThirdWallMesures,
  VerifyFourthWallMesures,
};
