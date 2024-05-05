import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, image, price } = service;
  return (
    <div className="card flex  w-96 bg-base-200 shadow-xl hover:scale-105 hover:transition">
      <figure className="px-10 pt-10">
        <img className="rounded-xl " src={image} alt="no image" />
      </figure>
      <div className="card-body  ">
        <h2 className="card-title font-bold text-2xl">{title}</h2>
        <p className="text-red-500 font-semibold text-xl">Price ${price}</p>
        <div className="card-actions">
        </div>

        <Link to={`/checkout/${_id}`}>

          <button className="btn  bg-red-500 font-bold text-white">Book Now</button>
        </Link>

      </div>
    </div>
  );
};

export default ServiceCard;
