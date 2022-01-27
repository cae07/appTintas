import React from 'react';
import PropTypes from 'prop-types';
import '../CSS/inputs.css'

function HeightAndWidth({ handleFunctions }) {
  const {
    handleHeight,
    handleWidth,
    height,
    width
  } = handleFunctions;

  return(
    <section className="inputs-container">
      <div className="unique-label">
        <label
          htmlFor="height"
        >
        ALTURA
        <input
          type="number"
          id="height"
          placeholder="centímetros"
          className="form-control"
          value={ height }
          onChange={ handleHeight }
          data-testid="height-input"
        />
        </label>
      </div>
      <div className="unique-label">
        <label
          htmlFor="width"
        >
          LARGURA
          <input
            type="number"
            id="width"
            placeholder="centímetros"
            className="form-control"
            value={ width }
            onChange={ handleWidth }
            data-testid="width-input"
          />
        </label>
      </div>
    </section>
  );
}

HeightAndWidth.propTypes = {
  handleFunctions: PropTypes.object.isRequired,
};

export default HeightAndWidth;
