import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import myContext from '../Context/myContext';

function StartForm() {
  const { name, setName } = useContext(myContext);
  const navigate = useNavigate();

  const handleChange = ({ target: { value } }) => {
    setName(value);
  };

  const handleClick = () => {
    if (name.length < 3) return alert('Não esqueça do seu nome.');
    navigate('/firstWall');
  };

  return(
    <div className="main-form-container">
      <form>
        <label
          htmlFor="input-name"
          className="form-label"
        >
          <input
            type="text"
            id="input-name"
            placeholder="digite seu nome"
            className="form-control"
            value={ name }
            onChange={ handleChange }
            data-testid="input-name"
          />
        </label>
        <div className="button-container">
          <button
            className="form-buttons"
            type="button"
            onClick={ handleClick }
          >
            começar
          </button>
        </div>
      </form>
    </div>
  );
}

export default StartForm;
