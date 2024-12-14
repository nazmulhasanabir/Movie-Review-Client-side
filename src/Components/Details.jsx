import Swal from "sweetalert2";
import Navbar from "./Navbar";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "./Provider/AuthProvider";

const Details = () => {
  const loadUser = useLoaderData();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [delMov, setDelMov] = useState(
    Array.isArray(loadUser) ? loadUser : [loadUser]
  );

  const convertMinutes = (minute) => {
    const hour = Math.floor(minute / 60);
    const min = minute % 60;
    return `${hour} hours ${min} min`;
  };

  const handleFavorite = (posterUrl, title, release, duration, genre, rating, summary) => {
    fetch("http://localhost:5000/favorite", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        posterUrl, title, release, duration, genre, rating,summary,
        email: user.email,  
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Movie added to favorites!",
            icon: "success",
            confirmButtonText: "OK",
          }).then(() => navigate("/favorite"));
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: "Failed to add favorite movie, Its Already added.",
          icon: "error",
          confirmButtonText: "OK",
        });
        navigate("/")
      });
  };

  const handleDelete = (_id) => {
    fetch(`http://localhost:5000/addedMovie/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Deleted Successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
          const remaining = delMov.filter((movie) => movie._id !== _id);
          setDelMov(remaining);
        }
      });
  };

  return (
    <div>
      <div className="bg-white dark:bg-gradient-to-br from-purple-900 via-black to-black">
      <Navbar />
      <h2 className="text-2xl font-bold text-center mt-2">Add Movie</h2>
      <div className="w-8/12 mx-auto card bg-white dark:bg-gradient-to-br from-purple-900 via-black to-black shadow-xl">
        {delMov.map((movie) => (
          <div
            key={movie._id}
            className="bg-red-300 p-2 my-6 rounded-xl dark:bg-gradient-to-br from-purple-900 via-black to-black dark:text-white"
          >
            <figure>
              <img className="rounded-xl" src={movie.posterUrl} alt={movie.title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {movie.title}
                <div className="badge badge-secondary">
                  {convertMinutes(movie.duration)}
                </div>
              </h2>
              <p className="text-2xl font-semibold">
                {movie.genre} ({movie.release})
              </p>
              <p>{movie.summary}</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline bg-red-700 text-white p-4">
                  <Link to={`/updateMovie/${movie._id}`}>
                    <button>Update</button>
                  </Link>
                </div>
                <div className="badge badge-outline bg-red-700 text-white p-4">
                  <button onClick={() => handleDelete(movie._id)}>Delete</button>
                </div>
                <div className="badge badge-outline bg-pink-600 text-white p-4">
                  <button onClick={() => handleFavorite(movie.posterUrl,movie.summary ,movie.title, movie.release, movie.duration, movie.genre, movie.rating)}>Favorite</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <Link to="/allMovie">
          <button className="w-4/12 bg-red-800 text-white rounded-3xl p-3 mt-4">
            All Movies
          </button>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Details;