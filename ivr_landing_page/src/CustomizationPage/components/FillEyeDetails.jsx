import React, { useEffect, useRef, useState } from "react";
import EyeGlass2 from "@/assets/EyeGlass2.jpg";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import NormalPrescription from "./NormalPrescription";
import SphericalPrescription from "./sphericalPrescription";

const FillEyeDetails = ({ setNav, currentState }) => {
  const [save, setSave] = useState(false);

  useEffect(() => {
    console.log("from save", save);
  }, [save]);

  return (
    <div className="w-screen h-screen flex justify-center items-center overflow-hidden">
      <div className="w-[70%] h-[75%] bg-white shadow-lg rounded-md relative flex gap-20 p-16 mt-[5%] animate-slideUp">
        <ArrowLeft
          className="w-11 h-11 rounded-full text-green-600 absolute top-[2%] left-[1%] p-2 cursor-pointer hover:bg-green-200 active:bg-green-300"
          onClick={() => setNav("Prescription")}
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
        <div className="flex-1 space-y-4">
          {currentState == "normalPrescription" ? (
            <NormalPrescription save={save} setSave={setSave}/>
          ) : (
            <SphericalPrescription save={save} setSave={setSave}/>
          )}
        </div>
        <Button
          disabled={!save}
          className="absolute bottom-[3%] right-[3%] text-lg bg-green-500 hover:bg-green-600 active:bg-green-700 cursor-pointer px-8 py-6 rounded-full"
          onClick={() => setNav("ConfirmDetails")}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default FillEyeDetails;
