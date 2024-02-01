/* eslint-disable react/prop-types */
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Detail = ({ detail }) => {
  console.log(detail);
  const details = useLoaderData();
  const [deleteProduct, setDeleteProduct] = useState(details);

  const { image, brand, price, description, _id } = detail || {};

  const handleAddToCart = () => {};

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://doploy-10-bqam80m6u-mahmudunnabis-projects.vercel.app//products/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
              const remaining = deleteProduct.filter((item) => item._id !== _id);
              setDeleteProduct(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="card w-[700px] bg-blue-300 shadow-xl">
      <figure>
        <img className=" w-full h-[400px]" src={image} alt="image" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-center">
          <h2 className="card-title text-red-500 uppercase">{brand}</h2>
        </div>
        <p className="text-base font-semibold">
          Description: <span className="text-xs font-normal">{description}</span>
        </p>
        <div className="flex items-center justify-start gap-4 mt-7">
          <h2 className="card-title ">
            Price: <span className="text-red-500">{price}</span>
          </h2>
        </div>
        <div className="flex card-actions justify-between pt-3">
          <button
            onClick={handleAddToCart}
            className="py-2 px-3 bg-blue-800 rounded-lg text-white font-medium uppercase text-sm"
          >
            Add To Cart
          </button>

          <button
            onClick={() => handleDelete(_id)}
            type="submit"
            className="py-2 px-3 bg-blue-800 rounded-lg text-white font-medium uppercase text-sm"
          >
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
