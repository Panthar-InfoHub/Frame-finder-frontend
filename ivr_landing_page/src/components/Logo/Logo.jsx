import React from "react";
import logo from "@/assets/logo.png";

const Logo = ({size}) => {
  return (
    <div className={`w-${size} h-${size/2} flex justify-center items-center overflow-hidden rounded-sm`}>
      <img src={logo} alt="Company Logo" className={`w-${size} h-${size} object-cover object-center`} />
    </div>
  );
};

export default Logo;
