import React from 'react';
import { fireEvent, screen } from '@testing-library/react'
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('3- Verifica os elementos na tela', () => {
  test('Existe um footer com valor"Primeira parede".', () => {
    renderWithRouter(<App />, {route: '/firstWall'});

    const footer = screen.getByRole('heading', {
      name:'Primeira parede',
      level: 1,
    });

    expect(footer).toBeDefined();
  });

  it('Verifica que existe 1 input para altura e 1 input para largura', () => {
    renderWithRouter(<App />, {route: '/firstWall'});

    const heightInput = screen.getByTestId('height-input');
    const widthInput = screen.getByTestId('width-input');
    const headerHeight = screen.getByText(/altura/i);
    const headerWidth= screen.getByText(/largura/i);

    expect(heightInput).toBeInTheDocument();
    expect(widthInput).toBeInTheDocument();
    expect(headerHeight).toBeInTheDocument();
    expect(headerWidth).toBeInTheDocument();
  });

  it('Verifica que existe 2 inputs do tipo checkbox com valores "Janelas" e "Portas".', () => {
    renderWithRouter(<App />, {route: '/firstWall'});

    const windowsAndDoorRadiosZero = screen.getAllByRole('radio', {
      name: '0',
    });
    const windowsAndDoorRadiosOne = screen.getAllByRole('radio', {
      name: '1',
    });
    const windowsAndDoorRadiosTwo = screen.getAllByRole('radio', {
      name: '2',
    });
    const windowsAndDoorRadiosThree = screen.getAllByRole('radio', {
      name: '3',
    });

    expect(windowsAndDoorRadiosZero).toBeDefined();
    expect(windowsAndDoorRadiosOne).toBeDefined();
    expect(windowsAndDoorRadiosTwo).toBeDefined();
    expect(windowsAndDoorRadiosThree).toBeDefined();
  })

  test('Verifica que existe um botão "próximo".', () => {
    renderWithRouter(<App />, {route: '/firstWall'});

    const button = screen.getByRole('button', {
      name:'próximo',
    });

    expect(button).toBeInTheDocument();
  });
});

describe('4- Verifica funcionalidades', () => {
  test('Verifica que é possivel escrever no input', () => {
    renderWithRouter(<App />, {route: '/firstWall'});

    const heightInput = screen.getByTestId('height-input');
    const widthInput = screen.getByTestId('width-input');

    fireEvent.change(heightInput, { target: { value: 100} });
    fireEvent.change(widthInput, { target: { value: 90} });

    expect(heightInput).toHaveValue(100);
    expect(widthInput).toHaveValue(90);
  });

  test('Verifica que só é possível selecionar um radio-button de Janelas por vez', () => {
    renderWithRouter(<App />, {route: '/firstWall'});

    const windowsRadiosZero = screen.getByTestId('window-radio-0');
    const windowsRadiosOne = screen.getByTestId('window-radio-1');
    const windowsRadiosTwo = screen.getByTestId('window-radio-2');
    const windowsRadiosThree = screen.getByTestId('window-radio-3');

    fireEvent.click(windowsRadiosOne);

    expect(windowsRadiosZero).not.toBeChecked();
    expect(windowsRadiosOne).toBeChecked();
    expect(windowsRadiosTwo).not.toBeChecked();
    expect(windowsRadiosThree).not.toBeChecked();

    fireEvent.click(windowsRadiosThree);

    expect(windowsRadiosZero).not.toBeChecked();
    expect(windowsRadiosOne).not.toBeChecked();
    expect(windowsRadiosTwo).not.toBeChecked();
    expect(windowsRadiosThree).toBeChecked();
  });

  test('Verifica que só é possível selecionar um radio-button de Portas por vez', () => {
    renderWithRouter(<App />, {route: '/firstWall'});

    const doorsRadiosZero = screen.getByTestId('door-radio-0');
    const doorsRadiosOne = screen.getByTestId('door-radio-1');
    const doorsRadiosTwo = screen.getByTestId('door-radio-2');
    const doorsRadiosThree = screen.getByTestId('door-radio-3');

    fireEvent.click(doorsRadiosTwo);

    expect(doorsRadiosZero).not.toBeChecked();
    expect(doorsRadiosOne).not.toBeChecked();
    expect(doorsRadiosTwo).toBeChecked();
    expect(doorsRadiosThree).not.toBeChecked();

    fireEvent.click(doorsRadiosThree);

    expect(doorsRadiosZero).not.toBeChecked();
    expect(doorsRadiosOne).not.toBeChecked();
    expect(doorsRadiosTwo).not.toBeChecked();
    expect(doorsRadiosThree).toBeChecked();
  })

  test('Verifica que ao apertar o botão, vai para a próxima página', () => {
    renderWithRouter(<App />, {route: '/firstWall'});
    
    const heightInput = screen.getByTestId('height-input');
    const widthInput = screen.getByTestId('width-input');
    const button = screen.getByRole('button', {
      name: 'próximo',
    });

    fireEvent.change(heightInput, { target: { value: 250} });
    fireEvent.change(widthInput, { target: { value: 350} });
    fireEvent.click(button);

    expect(location.pathname).toBe('/secondWall');
  });
});
