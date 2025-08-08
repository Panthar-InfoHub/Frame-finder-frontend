import React from "react";
import { IoIosArrowBack } from "react-icons/io";

const Shipping_Add = ({ Check, setNavLocal, add, setAdd }) => {
  return (
    <div className="flex-[2] animate-slideRight">
      <div className="flex gap-2 items-center mb-6">
        <div
          className="hover:bg-white/20 hover:shadow-lg border border-transparent hover:border-white/30 hover:backdrop-blur-xs rounded-full hover:cursor-pointer"
          //   onClick={() => setNav("LensPackage")}
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
          <div className="absolute bottom-0 left-2 text-red-400">
            Enter the pincode
          </div>
        </div>
        <div className="relative h-26">
          <input
            value={add.house}
            onChange={(e) => setAdd({ ...add, house: e.target.value })}
            type="text"
            placeholder="House number, Building Name*"
            className="w-full h-20 px-4 text-2xl rounded-lg outline-none border-2 border-zinc-400  focus:ring-3 focus:ring-green-300"
          />
          <div className="absolute bottom-0 left-2 text-red-400">
            Enter the house Number or Building name
          </div>
        </div>
        <div className="relative h-26">
          <textarea
            value={add.road}
            onChange={(e) => setAdd({ ...add, road: e.target.value })}
            placeholder="Road name, Area, Colony*"
            className="w-full h-20 overflow-y-auto p-4 scrollbar-hidden text-2xl resize-none rounded-lg outline-none border-2 border-zinc-400  focus:ring-3 focus:ring-green-300"
          ></textarea>
          <div className="absolute bottom-0 left-2 text-red-400">
            Enter the Road name or Area or Colony
          </div>
        </div>
        <textarea
          value={add.landmark}
          onChange={(e) => setAdd({ ...add, landmark: e.target.value })}
          placeholder="Landmark (Optional)"
          className="w-full h-20 overflow-y-auto p-4 scrollbar-hidden text-2xl resize-none rounded-lg outline-none border-2 border-zinc-400  focus:ring-3 focus:ring-green-300"
        ></textarea>
        <div className="relative h-26">
          <input
            value={add.name}
            onChange={(e) => setAdd({ ...add, name: e.target.value })}
            type="text"
            placeholder="Name*"
            className="w-full h-20 px-4 text-2xl rounded-lg outline-none border-2 border-zinc-400  focus:ring-3 focus:ring-green-300"
          />
          <div className="absolute bottom-0 left-2 text-red-400">
            Enter a Name
          </div>
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
          <div className="absolute bottom-0 left-2 text-red-400">
            Enter the phone number
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping_Add;
