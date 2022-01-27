import React from 'react';
import { Footer, StartForm,FirstHeader } from '../Components';
import '../CSS/main.css';

function StartPage() {
  return (
    <div className="page-container">
      <div className="start-page">
        <FirstHeader />
        <StartForm />
        <Footer />
      </div>
    </div>
  )
}

export default StartPage;
