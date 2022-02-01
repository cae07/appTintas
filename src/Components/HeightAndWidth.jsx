import React from 'react';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import myContext from '../Context/myContext';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';

function HeightAndWidth({ handleFunctions }) {
  const { modal, setModal, textModal } = useContext(myContext);

  const {
    handleHeight,
    handleWidth,
    height,
    width
  } = handleFunctions;

  return(
    <section className="inputs-container">
      <div className="unique-label">
        <Modal show={ modal } onHide={ () => setModal(false) }>
          <Modal.Header closeButton>
            <Modal.Title>Erro!</Modal.Title>
          </Modal.Header>
          <Modal.Body>{ textModal }</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={ () => setModal(false) }>
              fechar
            </Button>
          </Modal.Footer>
        </Modal>
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
