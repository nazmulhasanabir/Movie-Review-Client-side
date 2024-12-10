import Swal from "sweetalert2";
import Navbar from "../Navbar";
import {  useNavigate } from "react-router-dom";
import { useState } from "react";

const AddMovie = () => {
  const navigate = useNavigate();
  const [form , setForm] = useState({
    posterUrl: "",
     title : "",
     genre: "",
     duration: "",
     year: "",
     rating:"0",
     summary: "",
  })

  // release year drop down

    const handleChange = e => {
      const {name , value}  = e.target;
      setForm({...form, [name]: value})
    }
      // form validation 
    const validateForm = () => {
      const url = /^(ftp|http|https):\/\/[^ "]+$/;
      if(!url.test(form.posterUrl)){
        Swal.fire("Error", "Poster URL must be a valid link", "error");
        return false;
      }
      if( !form.title || form.title.length < 2){
        Swal.fire("Error", "Title must be at least 2 characters", "error");
      return false;
      }
      if(!form.genre){
        Swal.fire("Error", "Confirm the Genre option", "error")
      return false
      }
      if(!form.duration || isNaN(form.duration)  || form.duration <= 60 ){
        Swal.fire("Error", "Duration must be a number greater than 60", "error");
        return false;
      }
      if(!form.year){
        Swal.fire("Error", "Release year must be selected", "error");
        return false;
      }
      if (!form.rating || isNaN(form.rating)) {
        Swal.fire("Error", "Rating must be selected", "error");
        return false;
      }
      if (!form.summary || form.summary.length < 10) {
        Swal.fire("Error", "Summary must be at least 10 characters", "error");
        return false;
      }
      return true
    }


  // form submit 
  const handleAddMovie = (event) => {
    event.preventDefault();
    if(!validateForm()) {
      return
    };
    const form = event.target;
    const posterUrl = form.posterUrl.value;
    const title = form.title.value;
    const release = form.year.value;
    const genre = form.genre.value;
    const summary = form.summary.value;
    const duration = form.duration.value;
    const rating = form.rating.value;
    const movie = { duration,posterUrl, rating, title, release, genre, summary };
    console.log(movie);
    // send data to server
    fetch("http://localhost:5000/addedMovie", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(movie),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Movie Addeded Successfully",
            icon: "success",
            confirmButtonText: "Success!",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/allMovie");
            }
          });
        }
      });
  };
  return (
    <div className="bg-orange-100 dark:bg-gradient-to-br from-purple-900 via-black to-black">
      <Navbar></Navbar>
      <form  onSubmit={handleAddMovie}>
        <div className="w-6/12 mx-auto mt-5 flex flex-col gap-4 ">
          {/* poster url */}
          <div>
            <label className="input input-bordered flex items-center gap-2">
              <label>Poster URL:</label>
              <input
                name="posterUrl"
                type="text"
                className="grow"
                placeholder="Movie Poster"
               value={form.posterUrl}
               onChange={handleChange}
              />
            </label>
          </div>
          {/* title */}
          <div>
            <label className="input input-bordered flex items-center gap-2">
              <label>Title:</label>
              <input
                type="text"
                name="title"
                className="grow"
                placeholder="Movie Title"
                value={form.title}
                onChange={handleChange}
              />
            </label>
          </div>
          {/* release year */}
          <div>
            <label className="input input-bordered flex  items-center gap-2">
              <label className="text-sm">Release Year:</label>
              <select name="year" value={form.year} onChange={handleChange} required>
                <option value="">Select Year</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2022">2022</option>
                <option value="2022">2021</option>
                <option value="2022">2020</option>
                <option value="2022">2019</option>
                <option value="2022">2018</option>
                <option value="2022">2017</option>
                <option value="2022">2016</option>
                <option value="2022">2015</option>
                <option value="2022">2014</option>
                <option value="2022">2013</option>
                <option value="2022">2012</option>
                <option value="2022">2011</option>
                <option value="2022">2010</option>
                <option value="2022">2009</option>
                <option value="2022">2008</option>
                <option value="2022">2007</option>
                <option value="2022">2006</option>
                <option value="2022">2005</option>
                <option value="2022">2004</option>
                <option value="2022">2003</option>
                <option value="2022">2002</option>
                <option value="2022">2001</option>
                <option value="2022">2000</option>
              </select>
            </label>
          </div>
          {/* duration */}
          <label className="input input-bordered flex items-center gap-2">
              <label>Duration(min):</label>
              <input
                type="number"
                name="duration"
                className="grow"
                placeholder="Duration"
                value={form.duration}
                onChange={handleChange}
              />
            </label>
          {/* genre */}
          <div>
            <label className="input input-bordered flex  items-center gap-2">
              <label>Genre</label>
              <select name="genre" placeholder={"Genre"}
              onChange={handleChange}
              value={form.genre}
              >
                <option value="">Select</option>
                <option value="horror">Horror</option>
                <option value="horror">Romance</option>
                <option value="horror">Thriller</option>
                <option value="horror">Western</option>
                <option value="comedy">Comedy</option>
                <option value="drama">Drama</option>
                <option value="action">Action</option>
                <require />
              </select>
            </label>
          </div>
          {/* summary */}
          <div>
            <label className="input input-bordered h-14 flex items-center gap-2">
              <label>Summary:</label>
              <input
                type="text"
                name="summary"
                className="grow"
                placeholder="Movie Title"
                value={form.summary}
                onChange={handleChange}
              />
            </label>
          </div>
          {/* star */}
          <div>
            <label className="input input-bordered h-14 flex items-center gap-2">
              <label>Rating:</label>
              <select name="rating" placeholder={"rating"}
              onChange={handleChange}
              value={form.rating}
              required
              >
                <option value="">Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <require />
              </select>
            </label>
          </div>
          <button className="w-full rounded-lg text-white mx-auto bg-red-600" type="submit">
            Add Movie
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMovie;
