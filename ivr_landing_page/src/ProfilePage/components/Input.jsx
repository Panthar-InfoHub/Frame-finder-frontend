import React from "react";

const Input = ({ head, type,onChange }) => {
  let typeVal;
  if (type) typeVal = type ;
  else typeVal = "text";

  return (
    <div className="flex-[1] relative ">
      <div className="absolute text-sm bg-white  px-2 text-theme-color1 top-[-15%] left-[4%]">
        {head}*
      </div>
      <input
      onChange={onChange}
        type={typeVal}
        className="w-full h-full text-2xl py-4 px-3 rounded-lg focus:border-theme-color1 outline-none border-2 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0"
      />
    </div>
  );
};

export default Input;
