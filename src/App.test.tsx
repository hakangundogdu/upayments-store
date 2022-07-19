import React from 'react';
import { render, screen } from '@testing-library/react';
import Nav from './components/Nav';
import Home from './pages/Home';

test('Nav Bar', () => {
  render(<Nav />);
  expect(screen.getByText('Register')).toBeInTheDocument();
});

test('NAv Page', () => {
  render(<Nav />);
  expect(screen.getByText('Store')).toBeInTheDocument();
});

test('Home Page', () => {
  render(<Home />);
  expect(screen.getByText('Add Product')).toBeInTheDocument();
});
