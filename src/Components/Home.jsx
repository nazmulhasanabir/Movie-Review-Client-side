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

  const darkModeHandler = () => {
      setDark(!dark);
      document.body.classList.toggle("dark");
  }


  const movies = useLoaderData();
  const sortMovie = [...movies].sort((a, b) => b.rating - a.rating).slice(0, 6);
  return (
  <div className="bg-yellow-100 dark:bg-blue-900">
     
 
      <div className=" bg-gray-200 text-black dark:bg-gradient-to-br from-purple-900 via-black to-black ">
      <Navbar></Navbar>
      <Slider></Slider>
      <div className=" bg-gray-200  dark:bg-gradient-to-br from-purple-900 via-black to-black text-black">
      <Marquee>
        <MarqueeDetails></MarqueeDetails>
        <Marquee2></Marquee2>
        <Marquee3></Marquee3>
        <Marquee4></Marquee4>
        <Marquee5></Marquee5>

      </Marquee>
    </div>
      <div className="w-10/12 mx-auto rounded-xl  bg-gray-200  dark:bg-gradient-to-br from-purple-900 via-black to-black dark:text-white">
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold ">Popular Movies</h2>
          <Link to={"/allMovie"}>
            <button className="btn">All Movies {">"}</button>
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 ">
          {sortMovie.map((movie) => (
            <Cart key={movie._id} movie={movie}></Cart>
          ))}
        </div>
      </div>
      <div className="w-6/12 mx-auto bg-slate-400 rounded-lg">
          <ExtraOne></ExtraOne>
      </div>
      <Footer></Footer>
    </div>
  {/* </button> */}
  </div>
  );
};

export default Home;
