import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import myContext from '../Context/myContext';

function Footer() {
  const { pathname } = useLocation();
  const { footer, setFooter } = useContext(myContext);

  useEffect(() => { // para setar o footer de cada tela
    switch (pathname) {
      case '/':
        setFooter('Vamos pintar?');
        break;
      case '/firstWall':
        setFooter('Primeira parede');
        break;
      case '/secondWall':
        setFooter('Segunda parede');
        break;
      case '/thirdWall':
        setFooter('Terceira parede');
        break;
      case '/fourthWall':
        setFooter('Quarta parede');
        break;
      default:
        break;
    }
  });

  return (
    <footer className="footer">
      <h1>{ footer }</h1>
    </footer>
  );
}

export default Footer;
