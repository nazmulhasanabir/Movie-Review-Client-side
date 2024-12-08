import Swal from "sweetalert2";
import Navbar from "./Navbar";
import { Link, useLoaderData } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "./Provider/AuthProvider";

const Details = () => {
  const loadUser = useLoaderData();
  const { user } = useContext(AuthContext);
  const [delMov, setDelMov] = useState(
    Array.isArray(loadUser) ? loadUser : [loadUser]
  );
  console.log(user);
  const convertMinutes = (minute) => {
    const hour = Math.floor(minute / 60);
    const min = minute % 60;
    return `${hour} hours ${min} min`;
  };
  const { _id, posterUrl, title, release, duration, genre, rating, summary } =
    loadUser;

  //  favorite
  const handleFavorite = (movie) => {
    fetch("http://localhost:5000/fvrtMovie", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user.email,
        movieId: _id,
        duration: duration,
        posterUrl: posterUrl,
        rating: rating,
        title: title,
        release: release,
        genre: genre,
        summary: summary,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0 || data.upsertedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Movie added to favorites!",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: "Error!",
          text: "Failed to add favorite movie.",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  //handle Delete
  const handleDelete = (_id) => {
    console.log("delete", _id);
    fetch(`http://localhost:5000/addedMovie/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Deleted Successfully",
            icon: "success",
            confirmButtonText: "Deleted!",
          });
          if (Array.isArray(delMov)) {
            const remaining = delMov.filter((movie) => movie._id !== _id);
            setDelMov(remaining);
          } else {
            console.error("delMov is not an array:", delMov);
          }
        }
      });
  };

  return (
    <div className="bg-gradient-to-br from-purple-900 via-black to-black">
      <Navbar></Navbar>
      <div className="w-8/12 mx-auto card bg-gradient-to-br from-purple-900 via-black to-black  shadow-xl text-white ">
        {delMov.map(
          ({
            _id,
            posterUrl,
            title,
            release,
            duration,
            genre,
            summary,
            rating,
          }) => (
            <div className="bg-gradient-to-br from-purple-900 via-black to-black">
              <figure>
                <img src={posterUrl} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {title}
                  <div className="badge badge-secondary">
                    {convertMinutes(duration)}
                  </div>
                </h2>
              <div>  <p className="text-2xl font-semibold">{genre} ({release}) </p></div>
                <div className="text-center">
                  <h2>{summary}</h2>
                </div>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">
                    {" "}
                    <button onClick={() => handleDelete(_id)}>
                      Delete
                    </button>{" "}
                  </div>
                  <div className="badge badge-outline">
                    <Link to={"/favourite"}>
                      <button
                        onClick={() =>
                          handleFavorite({
                            duration,
                            posterUrl,
                            rating,
                            title,
                            release,
                            genre,
                            summary,
                          })
                        }
                      >
                        Favorite
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
      <div className="text-center">
        <Link to={"/allMovie"}>
          <button className="w-full bg-red-800 text-white rounded-3xl p-3 mt-4">All Movie</button>
        </Link>
      </div>
    </div>
  );
};

export default Details;
