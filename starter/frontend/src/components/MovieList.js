const movies = [
    { id: 1, title: 'Movie 1' },
    { id: 2, title: 'Movie 2' },
    { id: 3, title: 'Movie 3' },
  ];
  
  const MovieList = ({ onMovieClick }) => {
    return (
      <div>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id} onClick={() => onMovieClick(movie)}>
              {movie.title}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default MovieList;