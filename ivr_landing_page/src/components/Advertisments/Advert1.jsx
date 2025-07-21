import React from "react";
import cust_1 from "@/assets/cust_1.jpg";
import { Button } from "@/components/ui/button";
import addvertImage from "@/assets/addvertImage.png";

const Advert1 = () => {
  return (
    <div className="h-[530px] w-full flex bg-[#F8F8F8] mt-60">
      <img
        src={addvertImage}
        alt="Advertisments"
        className="h-full w-1/2 object-cover"
      />
      <div className="w-1/2 text-caenter flex flex-col justify-center items-center gap-6">
        <div className=" text-5xl font-bold w-3/4">BLUE COMPUTER GLASSES</div>
        <div className="text-2xl w-3/4">
          Blue computer glasses help reduce eye strain and enhance visual
          comfort during long hours of screen use
        </div>
        <Button className="text-[32px] text-black font-light bg-[#D9D9D9] rounded-none hover:bg-zinc-400 active:bg-zinc-600 h-[100px] w-[247px]">shop</Button>
      </div>
    </div>
  );
};

export default Advert1;
