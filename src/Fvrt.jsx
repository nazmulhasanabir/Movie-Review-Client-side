import { useContext, useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import { AuthContext } from "./Components/Provider/AuthProvider";
import Swal from "sweetalert2";
import Footer from "./Components/Footer";
import RatingReview from "./Components/Private route/Rating";

const Fvrt = () => {
  const { user } = useContext(AuthContext);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  // const email = user.email;
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/favorite/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          const fvrt = data.filter((movie) => movie.email === user?.email);
          setFavorites(fvrt);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching favorite movies:", err);
          setLoading(false);
        });
    }
  }, [user]);
  const handleDelete = (email, _id) => {
    fetch(`http://localhost:5000/favorite/${email}`, {
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
            confirmButtonText: "OK",
          });
          const remaining = favorites.filter((movie) => movie._id !== _id);
          setFavorites(remaining);
        }
      });
  };
  return (
    <div className="bg-gradient-to-br  from-purple-900 via-black to-black text-black dark:bg-gradient-to-br  dark:from-purple-200 dark:via-white dark:to-black dark:text-black">
      <Navbar />
      <h1 className="text-center text-3xl font-bold my-4 text-white dark:text-black ">Favorite Movies</h1>
      <div className="w-10/12 mx-auto gap-4 grid grid-cols-1 lg:grid-cols-3">
        {favorites.map((movie) => (
        <div className="card bg-purple-500 text-white dark:bg-pink-700 w-96 shadow-xl dark:text-white">
        <figure>
          <img
          className="rounded-2xl"
            src={movie.posterUrl}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-pink-300">{movie.release} ({movie.duration})</h2>
          <p>{movie.title.slice(0,120)}</p>
          <div className="card-actions justify-end">
          <p className="flex gap-3 text-xl text-red-300">
                      <RatingReview rating={movie.summary}></RatingReview>(
                      {movie.summary})
                    </p>
            <button onClick={()=>handleDelete(movie.email, movie._id)} className="btn btn-primary">Delete Favorite</button>
          </div>
        </div>
      </div>
         
        ))}
      </div>
      <div className="text-white">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Fvrt;
