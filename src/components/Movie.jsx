function Movie({ title, image }) {
  return (
    <div className="movie-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}

export default Movie;
