import React from "react";
import { IoIosArrowBack } from "react-icons/io";

const Payment_Methods = ({setNavLocal}) => {
  return (
    <div className="flex-[2] animate-slideRight pl-2">
      <div className="flex gap-2 items-center mb-6">
        <div
          className="rounded-full p-1 cursor-pointer hover:bg-green-200 active:scale-[1.4] transition-all ease-in-out"
            onClick={() => setNavLocal("Shipping_Add")}
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
