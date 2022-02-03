import React from 'react';
import { Footer, StartForm,FirstHeader } from '../Components';
import '../CSS/main.css';

function StartPage() {
  return (
    <div className="page-container">
      <div className="start-page">
        <Footer />
        <FirstHeader />
        <StartForm />
      </div>
    </div>
  )
}

export default StartPage;
