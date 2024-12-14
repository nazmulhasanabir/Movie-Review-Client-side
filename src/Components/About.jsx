import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="  dark:bg-gradient-to-br from-purple-900 via-white to-purple-800 dark:text-black  text-center p-20 ">
        <h2 className="text-5xl font-bold my-5">About the Developer</h2>
        <p className="font-normal text-base p-10">
          This project was crafted by <span className="font-bold">Abir</span>, a
          dedicated software developer with a strong passion for creating
          intuitive and impactful applications. Skilled in both front-end and
          back-end development, <span className="font-bold">Abir</span> is
          committed to delivering user-centric solutions that elevate
          experiences and provide real value.
        </p>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
