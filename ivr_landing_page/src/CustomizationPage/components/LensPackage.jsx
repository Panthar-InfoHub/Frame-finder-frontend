import React from "react";
import basic_lens from "@/assets/basic_lens.png";
import computer_lens from "@/assets/computer_lens.png";
import { ArrowLeft, ArrowRight } from "lucide-react";

const LensPackage = ({ setNav }) => {
  return (
    <div className="w-screen h-screen flex justify-center items-center overflow-hidden">
      <div className="w-[70%] h-[78%] mt-[5%] bg-white shadow-lg rounded-md relative p-6 space-y-10 overflow-auto scrollbar-hidden animate-slideUp">
        <ArrowLeft
          className="w-11 h-11 rounded-full text-green-600 absolute top-[2%] left-[1%] p-2 cursor-pointer hover:bg-green-200 active:bg-green-300"
          onClick={() => setNav("ConfirmDetails")}
        />
        <div className="text-3xl font-medium text-center">
          Choose Lens Package
        </div>
        <div className="flex relative p-8 gap-8 border-4 rounded-3xl">
          <ArrowRight className="w-11 h-11 rounded-full text-green-600 absolute top-[2%] right-[2%] p-2 cursor-pointer hover:bg-green-200 active:bg-green-300" />
          <img
            src={basic_lens}
            className="w-100 aspect-[4/3] rounded-3xl"
            alt=""
          />
          <div className="py-6">
            <div className="text-2xl mb-6">Basic Clear Lens</div>
            {/* <div className="ml-10"> */}
            <ul className="list-disc text-xl ml-4 list-inside">
              <li>6 Months Warranty</li>
              <li>Double Side Anti-Glare</li>
            </ul>
            {/* </div> */}
          </div>
          <div className="absolute bottom-0 right-0 text-4xl px-20 py-2  bg-linear-to-r from-white to-theme-color1 rounded-md">
            Frame + Lens: Get it for 1500/-
          </div>
        </div>
        <div className="flex relative p-8 gap-8 border-4 rounded-3xl">
          <ArrowRight className="w-11 h-11 rounded-full text-green-600 absolute top-[2%] right-[2%] p-2 cursor-pointer hover:bg-green-200 active:bg-green-300" />
          <img
            src={computer_lens}
            className="w-100 aspect-[4/3] rounded-3xl"
            alt=""
          />
          <div className="py-6">
            <div className="text-2xl mb-6">
              Computer Lenses ( Blu screen- Protect from Digital rays | UV
              Protection)
            </div>
            {/* <div className="ml-10"> */}
            <ul className="list-disc text-xl ml-4 list-inside">
              <li>6 Months Warranty</li>
              <li>Double Side Anti-Glare</li>
            </ul>
            {/* </div> */}
          </div>
          <div className="absolute bottom-0 right-0 text-4xl px-20 py-2  bg-linear-to-r from-white to-theme-color1 rounded-md">
            Frame + Lens: Get it for 1500/-
          </div>
        </div>
      </div>
    </div>
  );
};

export default LensPackage;
