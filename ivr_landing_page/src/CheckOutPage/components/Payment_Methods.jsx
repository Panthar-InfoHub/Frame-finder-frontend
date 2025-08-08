import React from "react";
import { IoIosArrowBack } from "react-icons/io";

const Payment_Methods = ({Check,setAdd,add}) => {
  return (
    <div className="flex-[2] animate-slideRight">
      <div className="flex gap-2 items-center mb-6">
        <div
          className="hover:bg-white/20 hover:shadow-lg border border-transparent hover:border-white/30 hover:backdrop-blur-xs rounded-full hover:cursor-pointer"
          //   onClick={() => setNav("LensPackage")}
        >
          <IoIosArrowBack size={25} />
        </div>
        <div className="text-2xl">Payments Methods</div>
      </div>
      {/* Options area */}
      <div className="space-y-3 pr-60">
        <div className="text-2xl cursor-pointer py-10 pl-18 rounded-4xl border-4 border-dashed border-theme-color1">UPI</div>
        <div className="text-2xl cursor-pointer py-10 pl-18 rounded-4xl border-4 border-dashed border-theme-color1">Net Banking</div>
        <div className="text-2xl cursor-pointer py-10 pl-18 rounded-4xl border-4 border-dashed border-theme-color1">Debit/credit Card</div>
      </div>
    </div>
  );
};

export default Payment_Methods;
