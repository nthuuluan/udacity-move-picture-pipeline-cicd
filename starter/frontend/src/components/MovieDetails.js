const MovieDetails = ({ movie }) => {
  return (
    <div>
      <h2>Title: {movie.title}</h2>
      <p>ID: {movie.id}</p>
    </div>
  );
};

export default MovieDetails;
