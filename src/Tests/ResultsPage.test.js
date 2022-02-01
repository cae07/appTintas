import React from 'react';
import { screen, fireEvent } from '@testing-library/react'
import renderWithRouter from './renderWithRouter';
import App from '../App';
import '@testing-library/jest-dom'

describe('5- Verifica resposta', () => {
  test('Quando as paredes tem 1 metro quadrado cada', async () => {
    renderWithRouter(<App />);

    const input = screen.getByTestId('input-name');
    const startButton = screen.getByRole('button', {
      name: 'começar',
    });
    const { pathname } = location;

    fireEvent.change(input, { target: { value: 'Caê' } } );
    fireEvent.click(startButton);

    expect(pathname).toBe('/firstWall');

    const heightInputOne = screen.getByTestId('height-input');
    const widthInputOne = screen.getByTestId('width-input');
    const nextButtonOne = screen.getByRole('button', {
      name:'próximo',
    });

    fireEvent.change(heightInputOne, { target: { value: 100} });
    fireEvent.change(widthInputOne, { target: { value: 100} });
    fireEvent.click(nextButtonOne);

    expect(pathname).toBe('/secondWall');

    const heightInputTwo = screen.getByTestId('height-input');
    const widthInputTwo = screen.getByTestId('width-input');
    const nextButtonTwo = screen.getByRole('button', {
      name:'próximo',
    });

    fireEvent.change(heightInputTwo, { target: { value: 100} });
    fireEvent.change(widthInputTwo, { target: { value: 100} });
    fireEvent.click(nextButtonTwo);

    expect(pathname).toBe('/thirdWall');
    
    const heightInputThree = screen.getByTestId('height-input');
    const widthInputThree = screen.getByTestId('width-input');
    const nextButtonThree = screen.getByRole('button', {
      name:'próximo',
    });

    fireEvent.change(heightInputThree, { target: { value: 100} });
    fireEvent.change(widthInputThree, { target: { value: 100} });
    fireEvent.click(nextButtonThree);

    expect(pathname).toBe('/fourthWall');

    const heightInputFour = screen.getByTestId('height-input');
    const widthInputFour = screen.getByTestId('width-input');
    const nextButtonFour = screen.getByRole('button', {
      name:'próximo',
    });

    fireEvent.change(heightInputFour, { target: { value: 100} });
    fireEvent.change(widthInputFour, { target: { value: 100} });
    fireEvent.click(nextButtonFour);

    expect(pathname).toBe('/result');

    const nameText = screen.getByText('Olá Caê');
    const needText = screen.getByText('Você precisa de');
    const h2Text = screen.getByText('2 latas de 0.5l');
    const finalText = screen.getByText('para colorir 4.00m².');

    expect(nameText).toBeInTheDocument();
    expect(needText).toBeInTheDocument();
    expect(h2Text).toBeInTheDocument();
    expect(finalText).toBeInTheDocument();
  });

  test('Quando as paredes tem 250cm X 250cm, uma janela em 2 paredes e uma porta em uma parede', async () => {
    renderWithRouter(<App />);

    const input = screen.getByTestId('input-name');
    const startButton = screen.getByRole('button', {
      name: 'começar',
    });
    const { pathname } = location;

    fireEvent.change(input, { target: { value: 'Caê' } } );
    fireEvent.click(startButton);

    expect(pathname).toBe('/firstWall');

    const heightInputOne = screen.getByTestId('height-input');
    const widthInputOne = screen.getByTestId('width-input');
    const windowsRadiosOne = screen.getByTestId('window-radio-1');
    const nextButtonOne = screen.getByRole('button', {
      name:'próximo',
    });

    fireEvent.change(heightInputOne, { target: { value: 250} });
    fireEvent.change(widthInputOne, { target: { value: 250} });
    fireEvent.click(windowsRadiosOne);
    fireEvent.click(nextButtonOne);

    expect(pathname).toBe('/secondWall');

    const heightInputTwo = screen.getByTestId('height-input');
    const widthInputTwo = screen.getByTestId('width-input');
    const windowsRadiosTwo = screen.getByTestId('window-radio-1');
    const nextButtonTwo = screen.getByRole('button', {
      name:'próximo',
    });

    fireEvent.change(heightInputTwo, { target: { value: 250} });
    fireEvent.change(widthInputTwo, { target: { value: 250} });
    fireEvent.click(windowsRadiosTwo);
    fireEvent.click(nextButtonTwo);

    expect(pathname).toBe('/thirdWall');
    
    const heightInputThree = screen.getByTestId('height-input');
    const widthInputThree = screen.getByTestId('width-input');
    const doorsRadiosOne = screen.getByTestId('door-radio-1');
    const nextButtonThree = screen.getByRole('button', {
      name:'próximo',
    });

    fireEvent.change(heightInputThree, { target: { value: 250} });
    fireEvent.change(widthInputThree, { target: { value: 250} });
    fireEvent.click(doorsRadiosOne);
    fireEvent.click(nextButtonThree);

    expect(pathname).toBe('/fourthWall');

    const heightInputFour = screen.getByTestId('height-input');
    const widthInputFour = screen.getByTestId('width-input');
    const nextButtonFour = screen.getByRole('button', {
      name:'próximo',
    });

    fireEvent.change(heightInputFour, { target: { value: 250} });
    fireEvent.change(widthInputFour, { target: { value: 250} });
    fireEvent.click(nextButtonFour);

    expect(pathname).toBe('/result');

    const nameText = screen.getByText('Olá Caê');
    const needText = screen.getByText('Você precisa de');
    const h2TextOne = screen.getByText('1 lata de 3.6l');
    const h2TextTwo = screen.getByText('1 lata de 0.5l');
    const finalText = screen.getByText('para colorir 18.68m².')

    expect(nameText).toBeInTheDocument();
    expect(needText).toBeInTheDocument();
    expect(h2TextOne).toBeInTheDocument();
    expect(h2TextTwo).toBeInTheDocument();
    expect(finalText).toBeInTheDocument();
  });
});
