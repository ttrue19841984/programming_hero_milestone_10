/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { BiDollar } from "react-icons/bi";

const ProductDetail = ({ cart }) => {
  console.log(cart);
  const {
    image,
    name,
    brand,
    price,
    type,
    rating,
    description,
    _id,
  } = cart || {};
  return (
    <div className="my-10">
      <div className="card w-[380px] bg-blue-300 shadow-xl">
      <figure>
        <img className="h-[260px] w-full" src={image} alt="image" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-center">
          <h2 className="card-title ">
            Name: <span className="text-blue-800">{name}</span>
          </h2>
          <h2 className="card-title text-red-500 uppercase">{brand}</h2>
        </div>
        <p className="text-base font-semibold">Description: <span className="text-xs font-normal">{description}</span></p>
        <div className="flex items-center justify-start gap-4 mt-7">
          <h2 className="flex justify-center items-center ">
            Price: <span className="text-red-500 flex justify-center items-center">{price} <BiDollar></BiDollar></span>
          </h2>
          <h2 className="text-sm font-bold">
            Type: <span className="bg-blue-400 rounded-full p-1">{type}</span>
          </h2>
          <h2 className="text-sm font-bold">
            Rating: <span className="text-blue-800">{rating}</span>
          </h2>
        </div>
        <div className="flex card-actions justify-between pt-3">
          <button className="py-2 px-3 bg-blue-800 rounded-lg text-white font-medium uppercase text-sm">
            <Link to={`/details/${_id}`}>
              Details Button
              </Link>
            </button>
          <Link to={`/updateProduct/${_id}`}>
          <button className="py-2 px-3 bg-blue-800 rounded-lg text-white font-medium uppercase text-sm">
            Update Button
            </button>
          </Link>
        </div>
      </div>
    </div>
      
    </div>
  );
};

export default ProductDetail;
