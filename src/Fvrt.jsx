import { useContext, useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import { AuthContext } from "./Components/Provider/AuthProvider";
import Swal from "sweetalert2";

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
          const fvrt = data.filter((movie)=> movie.email === user?.email)
          setFavorites(fvrt);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching favorite movies:", err);
          setLoading(false);
        });
    }
  }, [user]);
    const handleDelete = (email,_id) =>{
      fetch(`http://localhost:5000/favorite/${email}`,{
        method:"DELETE",
      })
      .then((res) => res.json())
      .then((data)=>{
        console.log(data);
        if(data.deletedCount > 0){
          Swal.fire({
            title: "Deleted!",
            text: "Deleted Successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
          const remaining = favorites.filter((movie) => movie._id !== _id )
          setFavorites(remaining)
        }
      })
    }
  return (
    <div className="bg-gradient-to-br from-purple-900 via-black to-black text-white">
      <Navbar />
      {favorites.length}
      <h1 className="text-center text-3xl font-bold my-4">Favorite Movies</h1>
      <div className="w-10/12 mx-auto">
        { (
          favorites.map((movie) => (
            <div
              key={movie._id}
              className="mb-4 p-4 border rounded bg-purple-800"
            >
              <h2 className="text-2xl font-semibold">{movie.title}</h2>
              <p>Genre: {movie.genre}</p>
              <p>Duration: {movie.duration} minutes</p>
              <p>Rating: {movie.rating}</p>
              <button onClick={()=>handleDelete(movie.email,movie._id)} className="btn">Delete</button>
            </div>
          ))
        ) }
      </div>
    </div>
  );
};

export default Fvrt;
