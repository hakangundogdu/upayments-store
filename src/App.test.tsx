import { render, screen } from '@testing-library/react';
import Nav from './components/Nav';
import Home from './pages/Home';

test('Nav - Register Button visible', () => {
  render(<Nav />);
  expect(screen.getByText('Register')).toBeInTheDocument();
});

test('Nav - Logo Text visible', () => {
  render(<Nav />);
  expect(screen.getByText('Store')).toBeInTheDocument();
});
