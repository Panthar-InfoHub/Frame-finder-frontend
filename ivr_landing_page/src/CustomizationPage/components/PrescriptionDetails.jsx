import React from "react";
import EyeGlass2 from "@/assets/EyeGlass2.jpg";
import Arrow from "@/assets/ArrowDown.png";
import upload from "@/assets/upload.png";
import save from "@/assets/save.png";
import fillout from "@/assets/fillout.png";

const PrescriptionDetails = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-[65%] h-[70%] bg-white shadow-lg rounded-md flex gap-8 p-16 mt-[5%]">
        <div className="w-[45%]">
          <img
            src={EyeGlass2}
            alt=""
            className="w-full h-[85%] border-3 rounded-xl"
          />
          <div className="flex justify-between mt-4">
            <div className="w-[40%]">
              <div className="text-3xl">Tecla</div>
              <div className="text-xl">Shipping & handling</div>
            </div>
            <div className="w-[40%] text-right">
              <div className="text-3xl">₹ 5000</div>
              <div className="text-xl">calculated at checkout</div>
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-11">
            <div className="text-2xl">Fill in your Prescription Details</div>
            <div className="grid grid-cols-4 gap-4 w-full h-4/5">
                <div className="bg-blue-200 col-start-2 text-2xl grid place-items-center">SPH</div>
                <div className="bg-blue-200 text-2xl grid place-items-center">CYL</div>
                <div className="bg-blue-200 text-2xl grid place-items-center">Axis</div>
                <div className="bg-blue-200 text-xl flex items-center pl-3">OD <br/> Right Eye</div>
                <div className="bg-blue-200">5</div>
                <div className="bg-blue-200">6</div>
                <div className="bg-blue-200">7</div>
                <div className="bg-blue-200 text-xl flex items-center pl-3">OS <br/> Left Eye</div>
                <div className="bg-blue-200">9</div>
                <div className="bg-blue-200">10</div>
                <div className="bg-blue-200">11</div>
                <div className="bg-blue-200 text-xl flex items-center pl-3">PD <br/> Pupillary Distance</div>
                <div className="bg-blue-200">13</div>
                <div className="bg-blue-200">14</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PrescriptionDetails;
