import React from "react";
import EyeGlass2 from "@/assets/EyeGlass2.jpg";
import Arrow from "@/assets/ArrowDown.png";
import upload from "@/assets/upload.png";
import save from "@/assets/save.png";
import fillout from "@/assets/fillout.png";

const LensDescriptionPage = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-3/5 h-[60%] bg-white shadow-lg rounded-md flex gap-8 p-16">
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
        <div className=" space-y-11">
          <div className="flex justify-between items-center w-full p-4 py-6 border-3 rounded-2xl">
            <div className="">
              <img src={upload} alt="" className="w-6 h-6"/>
            </div>
            <div className="">
              <div className="text-xl">Upload Prescription</div>
              <div className="text-lg">
                Upload a clear photo of your prescription.
              </div>
            </div>
            <div className="">
              <img src={Arrow} className="rotate-270" />
            </div>
          </div>
          <div className="flex justify-between items-center w-full p-4 py-6 border-3 rounded-2xl">
            <div className="">
              <img src={save} alt=""  className="w-6 h-6"/>
            </div>
            <div className="">
              <div className="text-xl">Use a saved prescription</div>
              <div className="text-lg">
                Select a saved prescription from your account.
              </div>
            </div>
            <div className="">
              <img src={Arrow} className="rotate-270" />
            </div>
          </div>
          <div className="flex justify-between items-center w-full p-4 py-6 border-3 rounded-2xl">
            <div className="">
              <img src={fillout} alt=""  className="w-6 h-6"/>
            </div>
            <div className="">
              <div className="text-xl">Fill it out Manually</div>
              <div className="text-lg">
                Enter your prescription details manually.
              </div>
            </div>
            <div className="">
              <img src={Arrow} className="rotate-270" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LensDescriptionPage;
