import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App component', () => {
  test('renders Movie List heading', () => {
    render(<App />);
    const headingElement = screen.getByText(/movie list/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('selects and displays movie details when clicked', () => {
    render(<App />);
    const movieItem = screen.getByText(/movie 1/i);
    fireEvent.click(movieItem);
    const detailsElement = screen.getByText(/movie details/i);
    expect(detailsElement).toBeInTheDocument();
  });
});
