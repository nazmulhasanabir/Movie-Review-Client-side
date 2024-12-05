// import React, { useState } from "react";
// import { toast } from "react-toastify";
// import { useAuth } from "../contexts/AuthContext"; // Assumes a custom Auth context
// import "react-toastify/dist/ReactToastify.css";

// const AddMovie = () => {
//   const { currentUser } = useAuth(); // To get the logged-in user's email
//   const [formData, setFormData] = useState({
//     poster: "",
//     title: "",
//     genre: "",
//     duration: "",
//     year: "",
//     rating: 0,
//     summary: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleRating = (rate) => {
//     setFormData({ ...formData, rating: rate });
//   };

//   const validateForm = () => {
//     const { poster, title, genre, duration, year, rating, summary } = formData;

//     if (!poster.startsWith("http")) {
//       toast.error("Poster must be a valid URL.");
//       return false;
//     }
//     if (title.length < 2) {
//       toast.error("Title must have at least 2 characters.");
//       return false;
//     }
//     if (!genre) {
//       toast.error("Please select a genre.");
//       return false;
//     }
//     if (duration < 60) {
//       toast.error("Duration must be greater than 60 minutes.");
//       return false;
//     }
//     if (!year) {
//       toast.error("Please select a release year.");
//       return false;
//     }
//     if (!rating) {
//       toast.error("Please select a rating.");
//       return false;
//     }
//     if (summary.length < 10) {
//       toast.error("Summary must have at least 10 characters.");
//       return false;
//     }
//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     const movieData = { ...formData, email: currentUser.email };
//     try {
//       const response = await fetch("https://your-api-endpoint/movies", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(movieData),
//       });

//       if (response.ok) {
//         toast.success("Movie added successfully!");
//         setFormData({
//           poster: "",
//           title: "",
//           genre: "",
//           duration: "",
//           year: "",
//           rating: 0,
//           summary: "",
//         });
//       } else {
//         toast.error("Failed to add the movie.");
//       }
//     } catch (error) {
//       toast.error("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <div>
//       <h2>Add Movie</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Poster URL:</label>
//           <input
//             type="text"
//             name="poster"
//             value={formData.poster}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Title:</label>
//           <input
//             type="text"
//             name="title"
//             value={formData.title}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Genre:</label>
//           <select name="genre" value={formData.genre} onChange={handleChange} required>
//             <option value="">Select Genre</option>
//             <option value="comedy">Comedy</option>
//             <option value="drama">Drama</option>
//             <option value="horror">Horror</option>
//           </select>
//         </div>
//         <div>
//           <label>Duration (minutes):</label>
//           <input
//             type="number"
//             name="duration"
//             value={formData.duration}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Release Year:</label>
//           <select name="year" value={formData.year} onChange={handleChange} required>
//             <option value="">Select Year</option>
//             <option value="2024">2024</option>
//             <option value="2023">2023</option>
//             <option value="2022">2022</option>
//           </select>
//         </div>
//         <div>
//           <label>Rating:</label>
//           {/* React Simple Star Rating */}
//           <StarRatingComponent
//             onClick={handleRating}
//             value={formData.rating}
//             starRatedColor="gold"
//           />
//         </div>
//         <div>
//           <label>Summary:</label>
//           <textarea
//             name="summary"
//             value={formData.summary}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit">Add Movie</button>
//       </form>
//     </div>
//   );
// };

// export default AddMovie;
