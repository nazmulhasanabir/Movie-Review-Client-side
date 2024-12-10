import React from 'react';

const Marquee5 = () => {
    return (
        <div>
               <div>
     <div className="bg-black text-white w-60 p-4 rounded-lg flex items-center justify-between shadow-lg">
      {/* Left Section: Image and Details */}
      <div className="flex items-start gap-4">
        {/* Movie Poster */}
        <img
          src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRIn-WWajVhKK9xYTOTfUN-6mGWdHiZchMv6ZlBkGfiBKg-RW17" // Replace with your movie poster URL
          alt="Movie Poster"
          className="w-16 h-16 rounded-md"
        />
        {/* Movie Details */}
        <div>
          <h3 className="font-bold text-base">Broad Peak</h3>
          <p className="text-gray-400 text-sm">Adventure, Action</p>
        </div>
      </div>

      {/* Right Section: Profile Images */}
      <div className="flex -space-x-2">
        <img
          className="w-8 h-8 rounded-full border-2 border-black"
          src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRIn-WWajVhKK9xYTOTfUN-6mGWdHiZchMv6ZlBkGfiBKg-RW17" // Replace with avatar URL
          alt="Profile 1"
        />
        <img
          className="w-8 h-8 rounded-full border-2 border-black"
          src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTM4nM-7g_rJt10VMUV3ljdPIIl6_qIPVeoMMPfrlz2qHbc9KGfuX7zWk7cON4auRXoa6W7iL2jm3tP3hA" // Replace with avatar URL
          alt="Profile 2"
        />
      </div>
    </div>
        </div>
        </div>
    );
};

export default Marquee5;

