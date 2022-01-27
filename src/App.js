import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Provider from './Context/Provider';
import {
  ContatoPage,
  FirstPage,
  FourthPage,
  ResultPage,
  SecondPage,
  StartPage,
  ThirdPage,
} from "./Pages/Index";

function App() {
  return (
    <Provider>
      <Routes>
        <Route path="/" element={ <StartPage /> } />
        <Route path="/firstWall" element={ <FirstPage /> } />
        <Route path="/secondWall" element={ <SecondPage /> } />
        <Route path="/thirdWall" element={ <ThirdPage /> } />
        <Route path="/fourthWall" element={ <FourthPage /> } />
        <Route path="/result" element={ <ResultPage /> } />
        <Route path='/contato' element={ <ContatoPage />} />
      </Routes>
    </Provider>
  );
}

export default App;
