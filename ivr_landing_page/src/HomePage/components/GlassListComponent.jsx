import { Button } from "@/components/ui/button";
import React from "react";
import cust_1 from "@/assets/cust_1.jpg";

const GlassListComponent = ({prodArray,link,border_radius,heading}) => {
  // const prodArray = [
  //   {
  //     image: cust_1,
  //     text: "RimLess Glass",
  //   },
  //   {
  //     image: cust_1,
  //     text: "Transparent Frame",
  //   },
  //   {
  //     image: cust_1,
  //     text: "Rich Acetate Glasses",
  //   },
  //   {
  //     image: cust_1,
  //     text: "Blue Computer Glasses",
  //   },
  //   {
  //     image: cust_1,
  //     text: "Metal Work",
  //   },
  // ];
  return (
    <div className="mt-40">
      <div className="relative text-center w-full mx-auto">
        <div className="font-lexend text-5xl font-semibold">{heading}</div>
        <Button
          variant="ghost"
          className="absolute right-0 top-2 w-fit h-fit cursor-pointer text-2xl py-4 bg-transparent text-green-400 active:text-green-600 hover:text-green-500 hover:bg-zinc-200"
        >
          See More
        </Button>
      </div>
      <div className="h-72 flex w-full justify-between mt-24">
        {prodArray.map((prod) => (
          <div className={`h-full w-52`}>
            <img src={prod.image} alt="" className={`w-52 ${border_radius?"rounded-full h-52 object-cover":"h-4/5"}`} />
            <div className="text-center text-2xl text-zinc-500 mt-3 tracking-wider">
              {prod.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GlassListComponent;
