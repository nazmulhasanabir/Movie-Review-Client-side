import React from 'react';

const Marquee4 = () => {
    return (
        <div>
        <div className="bg-black text-white w-60 p-4 rounded-lg flex items-center justify-between shadow-lg">
         {/* Left Section: Image and Details */}
         <div className="flex items-start gap-4">
           {/* Movie Poster */}
           <img
             src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRpOImtBcGyKXTobzlmmTv4m6ManP-WqPK2fVmTxp6g9q50v0WuMtI5fhlPjBFibcO7F0vbag" // Replace with your movie poster URL
             alt="Movie Poster"
             className="w-16 h-16 rounded-md"
           />
           {/* Movie Details */}
           <div>
             <h3 className="font-bold text-lg">Rampage</h3>
             <p className="text-gray-400 text-sm">Adventure, Action</p>
           </div>
         </div>
   
         {/* Right Section: Profile Images */}
         <div className="flex -space-x-2">
           <img
             className="w-8 h-8 rounded-full border-2 border-black"
             src="https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/235135_v9_bc.jpg" // Replace with avatar URL
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
    );
};

export default Marquee4;