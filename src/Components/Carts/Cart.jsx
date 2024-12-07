import { Link } from "react-router-dom";
import RatingReview from "../Private route/Rating";

const Cart = ({ movie = {} }) => {
  const convertMinutes = (minute) => {
    const hour = Math.floor(minute / 60);
    const min = minute % 60;
    return `${hour} hours ${min} min`;
  };
    const { _id,posterUrl, title, release, duration, genre, rating } = movie;
  
  return (
    <div>
      <div className="hero-content flex-col lg:flex-row">
        <div className="  ">
          <div>
            <img src={posterUrl} className="max-w-sm rounded-lg shadow-2xl" />
          </div>
          <div className="w-9/12 mx-auto text-center">
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="">{release}</p>
            <div className="flex items-center gap-2 ">
              <img
                className="w-4"
                src="https://img.icons8.com/?size=100&id=10058&format=png&color=FFFFFF"
              />
              <p className="">{convertMinutes(duration)}</p>
            </div>
            <p className="w-full"> <RatingReview rating={rating}></RatingReview> </p>
            <p className="">{genre}</p>
            <Link to={`/addedMovie/${_id}`}><button className="btn btn-primary">See Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
