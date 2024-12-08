import React from 'react';

const Marquee3 = () => {
    return (
        <div>
               <div>
     <div className="bg-black text-white w-60 p-4 rounded-lg flex items-center justify-between shadow-lg">
      {/* Left Section: Image and Details */}
      <div className="flex items-start gap-4">
        {/* Movie Poster */}
        <img
          src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQDmNRoNKlprPdS9U00u4_8uPasEDY7GerPU1RF4wV6aAlKLMHZ" 
          alt="Movie Poster"
          className="w-16 h-16 rounded-md"
        />
        {/* Movie Details */}
        <div>
          <h3 className="font-bold text-lg">SOLO</h3>
          <p className="text-gray-400 text-sm">Adventure, Action</p>
        </div>
      </div>

      {/* Right Section: Profile Images */}
      <div className="flex -space-x-2">
        <img
          className="w-8 h-8 rounded-full border-2 border-black"
          src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQDmNRoNKlprPdS9U00u4_8uPasEDY7GerPU1RF4wV6aAlKLMHZ" 
          alt="Profile 1"
        />
        <img
          className="w-8 h-8 rounded-full border-2 border-black"
          src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQDmNRoNKlprPdS9U00u4_8uPasEDY7GerPU1RF4wV6aAlKLMHZ" 
          alt="Profile 2"
        />
      </div>
    </div>
        </div>
        </div>
    );
};

export default Marquee3;