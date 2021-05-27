import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import Home from '../pages/home';
import LoginPage from '../pages/login';

test('renders App', () => {
  render(<App />);

  const linkElement = screen.getByText("Log in");

  expect(linkElement).toBeInTheDocument();
});

// test('renders Login', () => {
//   render(<LoginPage />);

//   const linkElement = screen.getByText("Log in");

//   expect(linkElement).toBeInTheDocument();
// });

test('renders Login', () => {
  render(<Home />);

  const linkElement = screen.getByText("Inserir Produto");

  expect(linkElement).toBeInTheDocument();
});

test('renders Login', () => {
  render(<Home />);

  const linkElement = screen.getByText("Inserir Produto");

  expect(linkElement).toBeInTheDocument();
});