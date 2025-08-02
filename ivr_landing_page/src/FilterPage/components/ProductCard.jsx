import React from "react";
import { Link } from "react-router";

const ProductCard = ({ image }) => {
  return (
    <Link to="/product">
    <div className="w-65 h-[345px] bg-white border-3 border-[#A6A6A6] p-4 rounded-3xl drop-shadow-xl/50">
      <img src={image} alt="product" className="w-43 h-43 mx-auto " />
      <div className="text-center mb-5">
        <div className="text-2xl font-[400] mb-2">Tecla</div>
        <div className="text-2xl font-[400]">Rs. 5000/-</div>
      </div>
        <div className="flex justify-center gap-3">
          <div
            className={`w-8 h-8 rounded-full ring-2 ring-offset-2 bg-blue-300`}
          />
          <div
            className={`w-8 h-8 rounded-full ring-2 ring-offset-2 bg-blue-300`}
          />
        </div>
    </div>
    </Link>
  );
};

export default ProductCard;
