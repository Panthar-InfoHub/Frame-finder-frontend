import React, { useEffect, useState } from "react";
import EyeGlass2 from "@/assets/EyeGlass2.jpg";
import Arrow from "@/assets/ArrowDown.png";
import upload from "@/assets/upload.png";
import save from "@/assets/save.png";
import fillout from "@/assets/fillout.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft } from "lucide-react";
import personalInfoStore from "@/stores/PersonalInfoStore";

const ConfirmDetails = ({ setNav }) => {
  const { prescription } = personalInfoStore();
  const { sph_od, cyl_od, axis_od, sph_os, cyl_os, axis_os, pd } = prescription;
  return (
    <div className="w-screen h-screen flex justify-center items-center overflow-hidden">
      <div className="w-[70%] h-[75%] bg-white shadow-lg rounded-md relative flex gap-20 p-16 mt-[5%] animate-slideUp">
        <ArrowLeft
          className="w-11 h-11 rounded-full text-green-600 absolute top-[2%] left-[1%] p-2 cursor-pointer hover:bg-green-200 active:bg-green-300"
          onClick={() => setNav("FillEyeDetails")}
        />
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
        <div className="flex-1 space-y-6">
          <div className="text-2xl text-center">Confirm Your Prescription</div>
          <div className="text-lg">
            Make sure your prescription matches the information below. Pay close
            attention to the plus (+) or minus (-).
          </div>
          <div className="text-lg">To edit, click the value.</div>
          <div className="text-lg">
            Prescription: <span className="text-green-600">Single Vision</span>
          </div>
          <div className="text-2xl">
            PD-Pupillary Distance: <span className="text-green-600">{pd}</span>
          </div>
          <div className="grid grid-cols-4 w-3/4 h-fit gap-1">
            <div className="col-start-2 text-xl grid place-items-center">
              SPH
            </div>
            <div className="text-xl grid place-items-center ">CYL</div>
            <div className="text-xl grid place-items-center ">Axis</div>
            <div className="text-xl flex items-center pl-3">Right OD</div>
            <div className="text-xl text-green-600 text-center">{sph_od}</div>
            <div className="text-xl text-green-600 text-center">{cyl_od}</div>
            <div className="text-xl text-green-600 text-center">{axis_od}</div>
            <div className="text-xl flex items-center pl-3 ">Left OS</div>
            <div className="text-xl text-green-600 text-center">{sph_os}</div>
            <div className="text-xl text-green-600 text-center">{cyl_os}</div>
            <div className="text-xl text-green-600 text-center">{axis_os}</div>
          </div>
          <Button
            variant="ghost"
            className="text-lg border-2 border-green-300 active:border-green-600 cursor-pointer px-8 py-6 rounded-full"
          >
            Edit
          </Button>
        </div>

        <Button
          className="absolute bottom-[3%] right-[3%] text-lg bg-green-500 hover:bg-green-600 active:bg-green-700 cursor-pointer px-8 py-6 rounded-full"
          onClick={() => setNav("LensPackage")}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default ConfirmDetails;
