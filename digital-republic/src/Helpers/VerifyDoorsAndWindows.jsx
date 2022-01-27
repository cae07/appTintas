const errorDWAlert = 'O total de área das portas e janelas deve ser no máximo 50% da área de parede';
const errorWallSize = 'A altura da parede que possui portas deve ser de no mínimo 220cm.'
const windowSquare = 24000;
const doorSquare = 15200;
const minmunWallWithDoor = 220;

const VerifyFirstDoorWindow = (heightOne, widthtOne, firstWindow, firstDoor, navigate) => {
  const firstWall = Math.ceil(Number(heightOne) * Number(widthtOne));
  const wallWindowOne = Math.ceil(Number(firstWindow)) * windowSquare;
  const wallDoorOne = Math.ceil(Number(firstDoor)) * doorSquare;

  if (firstDoor > 0) {
    if (heightOne < minmunWallWithDoor) {
      alert(errorWallSize);
      return navigate('/firstWall');
    }
  }

  if ((wallWindowOne + wallDoorOne) > (firstWall / 2)) {
    alert(errorDWAlert);
    return navigate('/firstWall');
  }

  return navigate('/secondWall');
};

const VerifySecondDoorWindow = (heightTwo, widthtTwo, secondWindow, secondDoor, navigate) => {
  const secondWall = Math.ceil(Number(heightTwo) * Number(widthtTwo));
  const wallWindowTwo = Math.ceil(Number(secondWindow)) * windowSquare;
  const wallDoorTwo = Math.ceil(Number(secondDoor)) * doorSquare;

  if (secondDoor > 0) {
    if (heightTwo < minmunWallWithDoor) {
      alert(errorWallSize);
      return navigate('/secondWall');
    }
  }

  if ((wallWindowTwo + wallDoorTwo) > (secondWall / 2)) {
    alert(errorDWAlert);
    return navigate('/secondWall');
  }

  return navigate('/thirdWall');
};

const VerifyThirdDoorWindow = (heightThree, widthtThree, thirdWindow, thirdDoor, navigate) => {
  const thirdWall = Math.ceil(Number(heightThree) * Number(widthtThree));
  const wallWindowThree = Math.ceil(Number(thirdWindow)) * windowSquare;
  const wallDoorThree = Math.ceil(Number(thirdDoor)) * doorSquare;

  if (thirdDoor > 0) {
    if (heightThree < minmunWallWithDoor) {
      alert(errorWallSize);
      return navigate('/thirdWall');
    }
  }

  if ((wallWindowThree + wallDoorThree) > (thirdWall / 2)) {
    alert(errorDWAlert);
    return navigate('/thirdWall');
  }

  return navigate('/fourthWall');
};

const VerifyFourthDoorWindow = (heightFour, widthtFour, fourthWindow, fourthDoor, navigate) => {
  const fourthWall = Math.ceil(Number(heightFour) * Number(widthtFour));
  const wallWindowFour = Math.ceil(Number(fourthWindow)) * windowSquare;
  const wallDoorFour = Math.ceil(Number(fourthDoor)) * doorSquare;

  if (fourthDoor > 0) {
    if (heightFour < minmunWallWithDoor) {
      alert(errorWallSize);
      return navigate('/fourthWall');
    }
  }

  if ((wallWindowFour + wallDoorFour) > (fourthWall / 2)) {
    alert(errorDWAlert);
    return navigate('/fourthWall');
  }

  return navigate('/result');
};

export {
  VerifyFirstDoorWindow,
  VerifySecondDoorWindow,
  VerifyThirdDoorWindow,
  VerifyFourthDoorWindow,
};
