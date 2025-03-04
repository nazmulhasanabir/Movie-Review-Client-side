import React from "react";
import Navbar from "./Navbar";
import { Link, useLoaderData } from "react-router-dom";
import Cart from "./Carts/Cart";
import Slider from "../Slider";
import Footer from "./Footer";
import ExtraOne from "../ExtraOne";
import Marquee from "react-fast-marquee";
import MarqueeDetails from "./Marquee/MarqueeDetails";
import Marquee2 from "./Marquee/Marquee2";
import Marquee3 from "./Marquee/Marquee3";
import Marquee5 from "./Marquee/Marquee5";
import Marquee4 from "./Marquee/Marquee4";
const Home = () => {
  const [dark, setDark] = React.useState(false);
  const movies = useLoaderData();
  const sortMovie = [...movies].sort((a, b) => b.rating - a.rating).slice(0, 6);
  return (
  <div className="  bg-gradient-to-br from-purple-900 via-black to-black  text-white  dark:bg-gradient-to-br dark:from-purple-300 dark:via-gray-100 dark:to-white dark:text-black">
     
 
      <div className=" bg-gradient-to-br from-purple-900 via-black to-black  text-white  dark:bg-gradient-to-br dark:from-purple-300 dark:via-gray-100 dark:to-white dark:text-black">
      <Navbar></Navbar>
      <Slider></Slider>
      <div className="  bg-gradient-to-br from-purple-900 via-black to-black mb-6 text-white  dark:bg-gradient-to-br dark:from-purple-300 dark:via-gray-100 dark:to-white dark:text-black">
        <h2 className="text-3xl lg:text-7xl font-bold my-3 dark:text-black  text-center">Upcoming Movie</h2>
      <Marquee>
        <MarqueeDetails></MarqueeDetails>
        <Marquee2></Marquee2>
        <Marquee3></Marquee3>
        <Marquee3></Marquee3>
        <Marquee3></Marquee3>
        <Marquee4></Marquee4>
        <Marquee5></Marquee5>
      </Marquee>
    </div>
      <div className="w-10/12  mx-auto rounded-xl my-4 dark:bg-gray-100 ">
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold ">Popular Movies</h2>
          <Link to={"/allMovie"}>
            <button className="btn bg-red-600 text-white">All Movies {">"}</button>
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 ">
          {sortMovie.map((movie) => (
            <Cart key={movie._id} movie={movie}></Cart>
          ))}
        </div>
      </div>
      <div className="w-6/12 mx-auto  rounded-lg">
          <ExtraOne></ExtraOne>
      </div>
      <Footer></Footer>
    </div>
  {/* </button> */}
  </div>
  );
};

export default Home;
