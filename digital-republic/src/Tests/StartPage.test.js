import React from 'react';
import { screen, fireEvent } from '@testing-library/react'
import renderWithRouter from './renderWithRouter';0
import '@testing-library/jest-dom'
import App from '../App';

describe('1- Verifica itens da tela', () => {
  test('Existe um footer h1 com valor "Vamos pintar?"', () => {
    renderWithRouter(<App />);

    const footer = screen.getByRole('heading', {
      name: /vamos pintar?/i,
      level: 1,
    });

    expect(footer).toBeDefined();
  });

  test('Existe um Header h2.', () => {
    renderWithRouter(<App />);

    const header = screen.getByRole('heading', {
      name: /qual o seu nome?/i,
      level: 2,
    });

    expect(header).toBeInTheDocument();
  });

  test('Verifica que existe um input para nome', () => {
    renderWithRouter(<App />);

    const input = screen.getByTestId('input-name');

    expect(input).toBeInTheDocument();
  })

  test('Verifica que existe um botão com valor "começar".', () => {
    renderWithRouter(<App />);

    const button = screen.getByRole('button', {
      name: 'começar',
    });

    expect(button).toBeInTheDocument();
  });
});

describe('2- Verifica funcionalidade do input e do botão.', () => {
  test('Quando escreve o nome corretamente', () => {
    renderWithRouter(<App />)
  
    const input = screen.getByTestId('input-name');
    const button = screen.getByRole('button', {
      name: 'começar',
    });

    fireEvent.change(input, { target: { value: 'Caê' } } );
    fireEvent.click(button);

    expect(location.pathname).toBe('/firstWall');
  });

  test('Quando não coloca o nome no input', () => {
    const jsdomAlert = window.alert; // pesquisa feita https://tousu.in/?qa=272864/
    window.alert = () => {}; // para o window alert
    renderWithRouter(<App />);

    const input = screen.getByTestId('input-name');
    const button = screen.getByRole('button', {
      name: 'começar',
    });

    fireEvent.change(input, { target: { value: '' } } );
    fireEvent.click(button);

    expect(location.pathname).toBe('/');
    window.alert = jsdomAlert;
  });
});
