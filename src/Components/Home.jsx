import React from "react";
import Navbar from "./Navbar";
import { Link, useLoaderData } from "react-router-dom";
import Cart from "./Carts/Cart";
import Slider from "../Slider";
import Footer from "./Footer";
import ExtraOne from "../ExtraOne";
import Marquee from "react-fast-marquee";
import MarqueeDetails from "./Marquee/MarqueeDetails";
const Home = () => {
  const movies = useLoaderData();
  const sortMovie = [...movies].sort((a, b) => b.rating - a.rating).slice(0, 6);
  return (
    <div className="bg-gradient-to-br from-purple-900 via-black to-black min-h-screen text-white">
      <Navbar></Navbar>
      <Slider></Slider>
      <div>
      <Marquee>
        <MarqueeDetails></MarqueeDetails>
      </Marquee>
    </div>
      <div className="w-10/12 mx-auto">
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold">Popular Movies</h2>
          <Link to={"/allMovie"}>
            <button className="btn">All Movies {">"}</button>
          </Link>
        </div>
        <div className="grid grid-cols-2 ">
          {sortMovie.map((movie) => (
            <Cart key={movie._id} movie={movie}></Cart>
          ))}
        </div>
      </div>
      <div className="w-6/12 mx-auto">
          <ExtraOne></ExtraOne>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
