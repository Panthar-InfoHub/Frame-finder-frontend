import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import React from "react";
import Logo from "@/assets/logo.png";
import Caraousal from "./Caraousal/Caraousal";
import CustomButton from "@/components/Button/CustomButton.jsx";
const HeroSection = () => {
  return (
    <>
    <div className="w-full h-screen relative">
    <div className="absolute z-10 top-0 left-0 flex flex-col justify-between items-center w-full h-full py-12 px-14">

      {/* LINKS SECTION */}
      <div className="h-fit w-full flex justify-between items-center text-xl">
        <div className="bg-white"><img src={Logo} alt="Logo" className="w-[250px] h-[108px]"/></div>
        <div className="text-black flex gap-8 text-2xl">
          <div className="">ECO ACETATE</div>
          <div className="">EYE GLASSES</div>
          <div className="">SUN GLASSES</div>
          <div className="">STYLE QUIZ</div>
          <div className="">ACCESSORIES</div>
        </div>
        <CustomButton/>
        <Search className="w-7 h-7" />
      </div>

      {/* TEXT-SECTION */}
      <div className="h-fit text-center w-fit text-white">
        <div className="text-5xl mb-8">ECO ACETATE</div>
        <div className="text-2xl mb-12">From Nature, With Love</div>
        <Button className=" w-3/4 text-lg rounded-full text-center bg-white text-black active:text-white hover:text-zinc-300">Discover Now</Button>
      </div>
      
    </div>
    <Caraousal/>
    </div>
    </>
  );
};

export default HeroSection;
