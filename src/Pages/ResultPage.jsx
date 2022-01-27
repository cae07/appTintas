import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import myContext from '../Context/myContext';
import '../CSS/results.css';

function ResultPage() {
  const {
    name,
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

  const [totalSquare, setTotalSquare] = useState(0);
  const [allCans, setAllCans] = useState([]);
  const navigate = useNavigate();

  const windowSquare = 2.4;
  const doorSquare = 1.52;
  const squareMeters = 10000;  

  const VerifyQuantity = (allCans) => {
    const count = {};

    allCans.forEach((tin) => {
      if (count[tin]) {
        count[tin] += 1;
        return;
      }
      count[tin] = 1; 
    });

    return count;
  };

  // useEffect para calcular quantos metros quadrados de parede existe para pintura
  useEffect(() => {
    const wallOne = (Number(heightOne) * Number(widthtOne)) / squareMeters;
    const wallTwo = (Number(heightTwo) * Number(widthtTwo)) / squareMeters;
    const wallThree = (Number(heightThree) * Number(widthtThree)) / squareMeters;
    const wallFour = (Number(heightFour) * Number(widthtFour)) / squareMeters;
    // mantive a lata de 18 litros, mas baseado nas regras de negócio, não é necessário
    const paintCansSize = [18, 3.6, 2.5, 0.5];

    const sumAllWindows = (
      Number(firstWindow) + Number(secondWindow) + Number(thirdWindow) + Number(fourthWindow)
    ) * windowSquare;

    const sumAllDoors = (
      Number(firstDoor) + Number(secondDoor) + Number(thirdDoor) + Number(fourthDoor)
    ) * doorSquare;

    const squareTotal = (
      (wallOne + wallTwo + wallThree + wallFour) - (sumAllWindows + sumAllDoors)
    ).toFixed(2);

    const VerifyTotalCans = (squareTotal) => {
      const totalCans = [];
      let totalPaint = squareTotal / 5;
  
      paintCansSize.forEach((tin) => { // HOF para definir tamanhos de latas
        if (tin < totalPaint) {
          totalPaint -= tin;
          totalCans.push(tin);
        }
        return null;
      });
      
      if (totalPaint > 0) { // verificação se ainda existem partes sem pintar
        totalCans.push(0.5);
      }
      return totalCans;
    };

    const finalAnswer = (squareTotal) => {
      setTotalSquare(squareTotal); // seta a informação para mostrar na tela;
      const totalPaint = VerifyTotalCans(squareTotal);
  
      const separatedCans = VerifyQuantity(totalPaint);
      const keys = Object.entries(separatedCans);
      setAllCans(keys);
    };
    finalAnswer(squareTotal);    
  }, [firstDoor, firstWindow, fourthDoor, fourthWindow, heightFour, heightOne, heightThree, heightTwo, secondDoor, secondWindow, thirdDoor, thirdWindow, widthtFour, widthtOne, widthtThree, widthtTwo]);


  return (
    <section className="results-container page-container">
      <div className="results">
        <h1>Olá {name}</h1>
        <h1>Você precisa de</h1>
        {allCans.map((tin, index) => {
          if (tin[1] === 1) {
            return <h2 key={ `${tin[0]}-${index}` }>{tin[1]} lata de {tin[0]}l</h2>
          }
          return <h2 key={ `${tin[0]}-${index}` }>{tin[1]} latas de {tin[0]}l</h2>
        })}
        <h1>para colorir {totalSquare}m².</h1>
        <div className="buy-button">
          <button
            type="buton"
            onClick={ () => navigate('/contato') }
          >
            COMPRAR
          </button>
        </div>
      </div>
    </section>
  );
}

export default ResultPage;
