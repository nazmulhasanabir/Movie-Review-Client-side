import Swal from "sweetalert2";
import Navbar from "./Navbar";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "./Provider/AuthProvider";
import Footer from "./Footer";
import RatingReview from "./Private route/Rating";

const Details = () => {
  const loadUser = useLoaderData();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [delMov, setDelMov] = useState([loadUser]);

  const convertMinutes = (minute) => {
    const hour = Math.floor(minute / 60);
    const min = minute % 60;
    return `${hour} hours ${min} min`;
  };

  const handleFavorite = (
    posterUrl,
    title,
    release,
    duration,
    genre,
    rating,
    summary
  ) => {
    fetch("http://localhost:5000/favorite", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        posterUrl,
        summary,
        title,
        release,
        duration,
        genre,
        rating,
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
        navigate("/");
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
      <div className="bg-gradient-to-br from-purple-900 via-black to-pink-900  text-white dark:bg-gradient-to-br dark:from-white dark:via-purple-300 dark:to-white dark:text-black">
        <Navbar />
        <div className="w-10/12 mx-auto card dark:bg-purple-300 shadow-xl">
          {delMov.map((movie) => (
            <div
              key={movie._id}
              className=" p-2 my-6 rounded-xl dark:bg-purple-300 dark:text-white"
            >
              <div className="w-11/12 mx-auto flex  flex-col  lg:flex-row gap-4 lg:justify-around ">
                <div>
                  <img
                    className="h-[250px] lg:h-[500px] w-full rounded-xl"
                    src={movie.posterUrl}
                  />
                </div>
                <div className="w-full lg:w-6/12">
                  <div className="">
                    <h2 className=" text-2xl  lg:text-5xl font-bold ">{movie.title}</h2>
                    <h2 className="text-xl">({movie.release})</h2>
                    <p className="flex gap-3 text-xl">
                      <RatingReview rating={movie.rating}></RatingReview>(
                      {movie.rating})
                    </p>
                    <p className="font-bold">{movie.genre}</p>
                    <h2 className="badge badge-secondary ">
                      Duration: {convertMinutes(movie.duration)}
                    </h2>
                  </div>
                    <div className="card-actions m-5 mt-2 justify-start flex sm:flex-row ">
                      <div className="badge btn-wide badge-outline bg-red-700 text-white p-4">
                        <Link to={`/updateMovie/${movie._id}`}>
                          <button>Update</button>
                        </Link>
                      </div>
                      <div className="badge btn-wide badge-outline bg-red-700 text-white p-4">
                        <button onClick={() => handleDelete(movie._id)}>
                          Delete
                        </button>
                      </div>
                      <div className="badge btn-wide badge-outline bg-pink-600 text-white p-4">
                        <button
                          onClick={() =>
                            handleFavorite(
                              movie.posterUrl,
                              movie.summary,
                              movie.title,
                              movie.release,
                              movie.duration,
                              movie.genre,
                              movie.rating
                            )
                          }
                        >
                          Favorite
                        </button>
                      </div>
                    </div>
                    <p>{movie.summary}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center ">
          <Link to="/allMovie">
            <button className="w-4/12 bg-red-800 text-white rounded-3xl p-3 mt-4">
              All Movies
            </button>
          </Link>
        </div>
      </div>

      <div className="bg-gradient-to-br from-purple-900 via-black to-black  text-white">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Details;
