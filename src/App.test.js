import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


test('renders flight schedule heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/flight schedule/i); 
  expect(headingElement).toBeInTheDocument();
});
