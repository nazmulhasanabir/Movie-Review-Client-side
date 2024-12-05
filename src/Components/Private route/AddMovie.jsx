import Swal from "sweetalert2";
import Navbar from "../Navbar";

const AddMovie = () => {
  const handleAddMovie = (event) => {
    event.preventDefault();

    const form = event.target;
    const posterUrl = form.posterUrl.value;
    const title = form.title.value;
    const release = form.year.value;
    const genre = form.genre.value;
    const summary = form.summary.value;
    const rating = form.rating.value;
    const movie = { posterUrl, rating ,title, release, genre, summary };
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
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div>
      <Navbar></Navbar>
      <h2>Add Movie</h2>
      <form onSubmit={handleAddMovie}>
        <div className="w-4/12 mx-auto">
          {/* poster url */}
          <label className="input input-bordered flex items-center gap-2">
            <label>Poster URL:</label>
            <input
              name="posterUrl"
              type="text"
              className="grow"
              placeholder="Movie Poster"
            />
          </label>
          {/* title */}
          <label className="input input-bordered flex items-center gap-2">
            <label>Title:</label>
            <input
              type="text"
              name="title"
              className="grow"
              placeholder="Movie Title"
            />
          </label>
          {/* release year */}
          <label className="input input-bordered flex  items-center gap-2">
            <label className="text-sm">Release Year:</label>
            <input type="duration" className="grow" value="" />
            <select name="year" required>
              <option value="">Select Year</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
            </select>
          </label>
          {/* genre */}
          <label className="input input-bordered flex  items-center gap-2">
            <label>Genre</label>
            <select name="genre" placeholder={"Genre"}>
              <option value="">Select</option>
              <option value="horror">Horror</option>
              <option value="comedy">Comedy</option>
              <option value="drama">Drama</option>
              <option value="action">Action</option>
              <require />
            </select>
          </label>
          {/* summary */}
          <label className="input input-bordered h-14 flex items-center gap-2">
            <label>Summary:</label>
            <textarea name="summary" />
          </label>
         {/* star */}
         <label className="input input-bordered h-14 flex items-center gap-2">
            <label>Rating:</label>
            <select name="rating" placeholder={"rating"}>
              <option value="">Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <require />
            </select>
          </label>
          <button className="w-full mx-auto bg-red-600" type="submit">
            Add Movie
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMovie;
