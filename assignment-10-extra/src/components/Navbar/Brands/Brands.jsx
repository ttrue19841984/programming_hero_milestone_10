/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";



const Brands = ({brandn}) => {
    const {brand_name, image} = brandn;
  return (
    
  <Link to={`/carts/${brand_name}`}>
    <div className="card h-64 w-64 bg-base-100 shadow-xl image-full">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{brand_name}</h2>
  </div>
  </div>
  </Link>

  )
}

export default Brands
