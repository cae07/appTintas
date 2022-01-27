import React from 'react';
import PropTypes from 'prop-types';
import '../CSS/radios.css'

function Windows({ changeWindows }) {
  return (
    <section className="windows-container">
      <div className="radios">
        <span>Janelas</span>
        <div className="labels">
          <div className="labels">
            <label htmlFor="zero-window">
              0
              <div>
                <input
                  type="radio"
                  name="windows"
                  value="0"
                  id="zero-window"
                  onChange={ changeWindows }
                  data-testid="window-radio-0"
                />
              </div>
            </label>
          </div>
          <div className="labels">
            <label htmlFor="first-window">
              1
              <div>
                <input
                  type="radio"
                  name="windows"
                  value="1"
                  id="first-window"
                  onChange={ changeWindows }
                  data-testid="window-radio-1"
                />
              </div>
            </label>
          </div>
          <div className="labels">
            <label htmlFor="second-window">
              2
              <div>
                <input
                  type="radio"
                  name="windows"
                  value="2"
                  id="second-window"
                  onChange={ changeWindows }
                  data-testid="window-radio-2"
                />
              </div>
            </label>
          </div>
          <div className="labels">
            <label htmlFor="third-window">
              3
              <div>
                <input
                  type="radio"
                  name="windows"
                  value="3"
                  id="third-window"
                  onChange={ changeWindows }
                  data-testid="window-radio-3"
                />
              </div>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}

Windows.propTypes = {
  changeWindows: PropTypes.func.isRequired,
};

export default Windows;
