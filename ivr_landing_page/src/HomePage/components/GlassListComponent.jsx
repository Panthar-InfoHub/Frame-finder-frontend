import { Button } from "@/components/ui/button";
import React from "react";
import cust_1 from "@/assets/cust_1.jpg";
import { Link } from "react-router";

const GlassListComponent = ({ prodArray, link, border_radius, heading }) => {
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
        <div className="font-lexend text-5xl ">{heading}</div>
        <Link to="/filter">
          <Button
            variant="ghost"
            className="absolute right-0 top-2 w-fit h-fit cursor-pointer text-2xl py-4 bg-transparent text-green-400 active:text-green-600 hover:text-green-500 hover:bg-zinc-200"
          >
            See More
          </Button>
        </Link>
      </div>
      <div className="h-fit flex w-full justify-between mt-24">
        {prodArray.map((prod) => (
          <Link to="/filter">
            <div
              className={`h-fit w-[250px] px-4 py-2 flex gap-4 flex-col justify-between items-center rounded-xl hover:shadow-[0_13px_27px_-5px_rgb(187_247_208),_0_8px_16px_-8px_rgb(134_239_172)]`}
            >
              <img
                src={prod.image}
                alt=""
                className={`w-52 ${
                  border_radius ? "rounded-full h-52 object-cover" : "h-4/5"
                }`}
              />
              <div className="text-center text-2xl text-zinc-500 tracking-wider">
                {prod.text}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GlassListComponent;
