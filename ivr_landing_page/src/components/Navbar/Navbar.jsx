import React from "react";
import Logo from "@/assets/logo.png";
import Shop from "@/assets/navbar_shopping_icon.png";
import User from "@/assets/navbar_user_icon.png";
import Search from "@/assets/navbar_search_icon.png";

const Navbar = () => {
  return (
    <div className="h-28 w-full fixed top-0 z-10 flex justify-between items-center bg-white px-6 shadow-2xl">
      <img src={Logo} className="w-48 h-20" alt="Logo" />
      <div className="flex gap-8">
        <img src={Shop} className="w-6 h-6" alt="Shopping" />
        <img src={Search} className="w-6 h-6" alt="Searching" />
        <img src={User} className="w-6 h-6" alt="UserIcon" />
      </div>
    </div>
  );
};

export default Navbar;
