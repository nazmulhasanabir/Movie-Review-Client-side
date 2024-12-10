import React from 'react';

const Marquee2 = () => {
    return (
        <div>
        <div className="bg-black text-white w-60 p-4 rounded-lg flex items-center justify-between shadow-lg">
         {/* Left Section: Image and Details */}
         <div className="flex items-start gap-4">
           {/* Movie Poster */}
           <img
             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ohGLf3Pkd5zPT167_gwNKiz415hrWxSQOym2pGvyXqV0m-8ugRHc9Je9CQcda56ZrVDFfA" 
             alt="Movie Poster"
             className="w-16 h-16 rounded-md"
           />
           {/* Movie Details */}
           <div>
             <h3 className="font-bold text-lg">PORTAL</h3>
             <p className="text-gray-400 text-sm">Horror</p>
           </div>
         </div>
   
         {/* Right Section: Profile Images */}
         <div className="flex -space-x-2">
           <img
             className="w-8 h-8 rounded-full border-2 border-black"
             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMH-lIB6wVMxEb1ViNqivnJ3wYMmvOIpivyg&s" // Replace with avatar URL
             alt="Profile 1"
           />
           <img
             className="w-8 h-8 rounded-full border-2 border-black"
             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMH-lIB6wVMxEb1ViNqivnJ3wYMmvOIpivyg&s" 
             alt="Profile 2"
           />
         </div>
       </div>
           </div>
    );
};

export default Marquee2;