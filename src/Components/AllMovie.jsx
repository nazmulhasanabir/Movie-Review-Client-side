import React, { useContext } from "react";
import Navbar from "./Navbar";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";

const AllMovie = () => {
  const { user} = useContext(AuthContext);
  const movies = useLoaderData({});
  const { _id,posterUrl, title, release, duration, genre, rating } = movies;
  
  return (
    <div>
      <Navbar></Navbar>
        <p className="text-center"> {movies.length}</p>  
      <div className="grid grid-cols-3">
        {movies.map((movie) => (
          <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src={movie.posterUrl}
                className="max-w-sm rounded-lg shadow-2xl"
              />
              <div>
                <h1 className="text-5xl font-bold">{movie.genre}</h1>
                <p className="py-6">
                  {movie.title}
                </p>
                {user && user?.email ? (
             <Link to={`/addedMovie/${movie._id}`}><button className="btn btn-primary">See Details</button></Link>
            ) : (
              <Link to={"/signIn"}>
                <button className="btn btn-primary">See Details</button>
              </Link>
            )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllMovie;
