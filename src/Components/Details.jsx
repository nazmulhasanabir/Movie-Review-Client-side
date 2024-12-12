import Swal from "sweetalert2";
import Navbar from "./Navbar";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "./Provider/AuthProvider";

const Details = () => {
  const loadUser = useLoaderData();
  const navigate = useNavigate()
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
        ...movie
        // movieId: _id,
        // duration: duration,
        // posterUrl: posterUrl,
        // rating: rating,
        // title: title,
        // release: release,
        // genre: genre,
        // summary: summary,
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
          }).then(()=> navigate("/favourite"))
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
    <div className=" bg-white  dark:bg-gradient-to-br from-purple-900 via-black to-black">
      <Navbar></Navbar>
      <h2 className='text-2xl font-bold text-center mt-2'>Add Movie</h2>
      <div className="w-8/12 text-black mx-auto card bg-white dark:bg-gradient-to-br from-purple-900 via-black to-black  shadow-xl  ">
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
            <div className="bg-red-300 p-2 my-6 rounded-xl dark:bg-gradient-to-br from-purple-900 via-black to-black dark:text-white">
              <figure>
                <img className="rounded-xl" src={posterUrl} />
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
                  <div className="badge badge-outline bg-red-700 text-white p-4">

                    <Link to={`/updateMovie/${_id}`}>
                    <button >
                      Update
                    </button>
                    </Link>
                  </div>
                  <div className="badge badge-outline bg-red-700 text-white p-4">

                    <button onClick={() => handleDelete(_id)}>
                      Delete
                    </button>
                  </div>
                  <div className="badge badge-outline bg-pink-600 text-white p-4">
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
          <button className="w-4/12 bg-red-800 text-white rounded-3xl p-3 mt-4">All Movie</button>
        </Link>
      </div>
    </div>
  );
};

export default Details;
