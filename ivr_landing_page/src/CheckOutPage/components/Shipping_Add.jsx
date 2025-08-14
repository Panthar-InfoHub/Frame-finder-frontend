// import { error } from "console";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router";

const Shipping_Add = ({ Check, setNavLocal, add, setAdd, error }) => {
  let navigate = useNavigate();
  return (
    <div className="flex-[2] animate-slideRight pl-2">
      <div className="flex gap-1 items-center mb-6">
        <div
          className="rounded-full p-1 cursor-pointer hover:bg-green-200 active:scale-[1.4] transition-all ease-in-out"
          onClick={() => navigate("/customize")}
        >
          <IoIosArrowBack size={25} />
        </div>
        <div className="text-2xl">Add Delivery Address</div>
      </div>
      {/* details area */}
      <div className="space-y-3 pr-60">
        <div className="relative h-26">
          <input
            value={add.pincode}
            onChange={(e) => {
              if (Check(e.target.value))
                setAdd({ ...add, pincode: e.target.value });
            }}
            placeholder="Pincode*"
            className="w-full h-20 px-4 text-2xl rounded-lg outline-none border-2 border-zinc-400 focus:ring-3 focus:ring-green-300"
          />
          {error.pincode && (
            <div className="absolute bottom-0 left-2 text-red-400">
              {error.pincode}
            </div>
          )}
        </div>
        <div className="relative h-26">
          <input
            value={add.house}
            onChange={(e) => setAdd({ ...add, house: e.target.value })}
            type="text"
            placeholder="House number, Building Name*"
            className="w-full h-20 px-4 text-2xl rounded-lg outline-none border-2 border-zinc-400  focus:ring-3 focus:ring-green-300"
          />
          {error.house && (
            <div className="absolute bottom-0 left-2 text-red-400">
              {error.house}
            </div>
          )}
        </div>
        <div className="relative h-26">
          <textarea
            value={add.road}
            onChange={(e) => setAdd({ ...add, road: e.target.value })}
            placeholder="Road name, Area, Colony*"
            className="w-full h-20 overflow-y-auto p-4 scrollbar-hidden text-2xl resize-none rounded-lg outline-none border-2 border-zinc-400  focus:ring-3 focus:ring-green-300"
          ></textarea>
          {error.road && (
            <div className="absolute bottom-0 left-2 text-red-400">
              {error.road}
            </div>
          )}
        </div>
        <textarea
          value={add.landmark}
          onChange={(e) => setAdd({ ...add, landmark: e.target.value })}
          placeholder="Landmark (Optional)"
          className="w-full h-20 overflow-y-auto p-4 mb-7 scrollbar-hidden text-2xl resize-none rounded-lg outline-none border-2 border-zinc-400  focus:ring-3 focus:ring-green-300"
        />
        <div className="relative h-26">
          <input
            value={add.name}
            onChange={(e) => setAdd({ ...add, name: e.target.value })}
            type="text"
            placeholder="Name*"
            className="w-full h-20 px-4 text-2xl rounded-lg outline-none border-2 border-zinc-400  focus:ring-3 focus:ring-green-300"
          />
          {error.name && (
            <div className="absolute bottom-0 left-2 text-red-400">
              {error.name}
            </div>
          )}
        </div>
        <div className="relative h-26">
          <input
            value={add.phone}
            onChange={(e) => {
              if (Check(e.target.value))
                setAdd({ ...add, phone: e.target.value });
            }}
            placeholder="+91 Phone Number*"
            className="w-full h-20 px-4 text-2xl rounded-lg outline-none border-2 border-zinc-400  focus:ring-3 focus:ring-green-300"
          />
          {error.phone && (
            <div className="absolute bottom-0 left-2 text-red-400">
              {error.phone}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shipping_Add;
