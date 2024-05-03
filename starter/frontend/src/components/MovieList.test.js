import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import MovieList from './MovieList';

const mockMovies = [
  { id: 1, title: 'Movie 1' },
  { id: 2, title: 'Movie 2' },
  { id: 3, title: 'Movie 3' }
];

describe('MovieList Component', () => {
  it('renders movie list correctly', () => {
    render(<MovieList movies={mockMovies} />);
    const movieItems = screen.getAllByRole('listitem');
    expect(movieItems).toHaveLength(mockMovies.length);
  });

  it('calls onMovieClick when a movie is clicked', () => {
    const onMovieClick = jest.fn();
    render(<MovieList movies={mockMovies} onMovieClick={onMovieClick} />);
    const movieItem = screen.getByText('Movie 1');
    fireEvent.click(movieItem);
    expect(onMovieClick).toHaveBeenCalledWith(mockMovies[0]);
  });
});