import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/movies/${id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);

  const handleDelete = () => {
    fetch(`http://localhost:5000/movies/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        alert("Movie deleted successfully");
        navigate("/allMovies");
      });
  };

  const handleAddToFavorites = () => {
    const favoriteMovie = { ...movie, userEmail: "user@example.com" }; // Add user email or ID
    fetch("http://localhost:5000/favorites", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(favoriteMovie),
    })
      .then((res) => res.json())
      .then(() => alert("Movie added to favorites!"));
  };

  if (!movie) return <p>Loading...</p>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.summary}</p>
      <button onClick={handleDelete}>Delete Movie</button>
      <button onClick={handleAddToFavorites}>Add to Favorite</button>
    </div>
  );
};

export default MovieDetails;
