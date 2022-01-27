import React from 'react';
import PropTypes from 'prop-types';
import '../CSS/radios.css';

function Doors({ changeDoors }) {
  return (
    <section className="windows-container">
      <div className="radios">
        <span>Portas</span>
        <div className="labels">
          <div className="labels">
            <label htmlFor="door-zero">
              0
              <div>
                <input
                  type="radio"
                  name="doors"
                  value="0"
                  id="door-zero"
                  onChange={ changeDoors }
                  data-testid="door-radio-0"
                />
              </div>
            </label>
          </div>
          <div className="labels">
            <label htmlFor="door-one">
              1
              <div>
                <input
                  type="radio"
                  name="doors"
                  value="1"
                  id="door-one"
                  onChange={ changeDoors }
                  data-testid="door-radio-1"
                />
              </div>
            </label>
          </div>
          <div className="labels">
            <label htmlFor="door-two">
              2
              <div>
                <input
                  type="radio"
                  name="doors"
                  value="2"
                  id="door-one"
                  onChange={ changeDoors }
                  data-testid="door-radio-2"
                />
              </div>
            </label>
          </div>
          <div className="labels">
            <label htmlFor="door-three">
              3
              <div>
                <input
                  type="radio"
                  name="doors"
                  value="3"
                  id="door-three"
                  onChange={ changeDoors }
                  data-testid="door-radio-3"
                />
              </div>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}

Doors.propTypes = {
  changeDoors: PropTypes.func.isRequired,
};

export default Doors;