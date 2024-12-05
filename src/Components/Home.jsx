import React from "react";
import Navbar from "./Navbar";
import {  Link, useLoaderData } from "react-router-dom";
import Cart from "./Carts/Cart";
import Slider from "../Slider";
import AllMovie from "./AllMovie";

const Home = () => {
  const movies = useLoaderData();
  const sortMovie = [...movies].sort((a , b) => b.rating - a.rating).slice(0,6)
  return (
    <div>
      <Navbar></Navbar>
      <Slider></Slider>
      <h2>card {movies.length}</h2>
      <div className="grid grid-cols-2 ">
        {sortMovie.map((movie) => (
          <Cart key={movie._id} movie={movie}></Cart>
        ))}
      </div>
     <div className="w-1/12 mx-auto">
     <Link to={'/allMovie'}><button className="btn">See All</button></Link>
     </div>
    </div>
  );
};

export default Home;
