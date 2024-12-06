import Navbar from "./Navbar";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const loadUser = useLoaderData();
  const convertMinutes = (minute) => {
    const hour = Math.floor(minute / 60);
    const min = minute % 60;
    return `${hour} hours ${min} min`;
  };
  const { _id, posterUrl, title, release, duration, genre, rating } = loadUser;

  console.log(loadUser);
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img
              src={posterUrl}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {title}
              <div className="badge badge-secondary">{convertMinutes(duration)}</div>
            </h2>
            <p>{genre}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline"> <button>Delete</button> </div>
              <div className="badge badge-outline"> <button>Favorite</button> </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
