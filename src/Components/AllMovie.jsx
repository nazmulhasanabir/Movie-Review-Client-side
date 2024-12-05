import React from "react";
import Navbar from "./Navbar";
import { useLoaderData } from "react-router-dom";

const AllMovie = () => {
  const movies = useLoaderData();
  return (
    <div>
      <Navbar></Navbar>
        <p className="text-center"> {movies.length}</p>  
      <div>
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
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllMovie;
