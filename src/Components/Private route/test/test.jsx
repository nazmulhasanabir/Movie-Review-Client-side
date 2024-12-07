import Swal from "sweetalert2";
import Navbar from "./Navbar";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";

const Details = () => {
  const loadUser = useLoaderData();
  const [delMov, setDelMov] = useState(Array.isArray(loadUser) ? loadUser : [loadUser]);

  const convertMinutes = (minute) => {
    const hour = Math.floor(minute / 60);
    const min = minute % 60;
    return `${hour} hours ${min} min`;
  };

  const handleDelete = (_id) => {
    console.log("delete", _id);
    fetch(`http://localhost:5000/addedMovie/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Deleted Successfully",
            icon: "success",
            confirmButtonText: "Deleted!",
          });

          if (Array.isArray(delMov)) {
            const remaining = delMov.filter((movie) => movie._id !== _id);
            setDelMov(remaining);
          } else {
            console.error("delMov is not an array:", delMov);
          }
        }
      });
  };

  // Ensure `delMov` is iterable for rendering
  if (!Array.isArray(delMov)) {
    console.error("delMov is not an array, cannot render", delMov);
    return null;
  }

  return (
    <div>
      <Navbar />
      <div>
        {delMov.map(({ _id, posterUrl, title, release, duration, genre, rating }) => (
          <div key={_id} className="card bg-base-100 w-96 shadow-xl">
            <figure>
              <img src={posterUrl} alt={title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {title}
                <div className="badge badge-secondary">{convertMinutes(duration)}</div>
              </h2>
              <p>{genre}</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">
                  <button onClick={() => handleDelete(_id)}>Delete</button>
                </div>
                <div className="badge badge-outline">
                  <button>Favorite</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;



// year list on add movie page 
import React, { useState } from 'react';

const BirthYearDropdown = () => {
  const [birthYear, setBirthYear] = useState('');

  // Generate a list of years dynamically
  const currentYear = new Date().getFullYear();
  const startYear = 1900; // Adjust this to the earliest year you want to include
  const years = Array.from({ length: currentYear - startYear + 1 }, (_, index) => currentYear - index);

  const handleChange = (event) => {
    setBirthYear(event.target.value);
  };

  return (
    <div>
      <label htmlFor="birthYear">Select Your Birth Year:</label>
      <select id="birthYear" value={birthYear} onChange={handleChange}>
        <option value="">--Select Year--</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BirthYearDropdown;
