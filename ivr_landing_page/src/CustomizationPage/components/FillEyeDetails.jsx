import React, { useEffect, useRef, useState } from "react";
import EyeGlass2 from "@/assets/EyeGlass2.jpg";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import NormalPrescription from "./SunGlassPrescription";
import SphericalPrescription from "./sphericalPrescription";
import ToricPrescription from "./ToricPrescription";
import MutltiFocalPrescription from "./MultiFocalPrescription";
import MultiFocalPrescription from "./MultiFocalPrescription";
import SunGlassPrescription from "./SunGlassPrescription";

const FillEyeDetails = ({ setNav, currentState }) => {
  const [save, setSave] = useState(false);

  useEffect(() => {
    console.log("from save", save);
  }, [save]);

  return (
    <div className="w-screen h-screen flex justify-center items-center overflow-hidden">
      <div className="max-[1500px]:w-[80%] max-[1500px]:h-[70%] w-340 h-fit bg-white shadow-lg rounded-md relative p-8 px-10 mt-[5%] animate-slideUp">
        <ArrowLeft
          className="max-[1300px]:w-8 max-[1300px]:h-8 w-11 h-11 rounded-full text-green-600 absolute top-[2%] left-[1%] p-2 cursor-pointer hover:bg-green-200 active:bg-green-300"
          onClick={() => setNav("Prescription")}
        />
        <div className="flex justify-end max-[1300px]:mb-0 mb-[2%]">
          <div className="w-1/2 max-[1300px]:text-lg text-2xl text-center">
            Fill in your Prescription Details for {currentState} Lenses
          </div>
        </div>
        <div className="flex gap-20 w-full h-[98%]">
          <div className="flex-[2]">
            <img
              src={EyeGlass2}
              alt=""
              className="w-full mx-auto h-[70%] max-h-[500px] object-cover border-3 rounded-xl"
            />
            <div className="flex justify-between mt-4 w-full mx-auto">
              <div className="w-[40%]">
                <div className="max-[1300px]:text-lg text-3xl">Tecla</div>
                <div className="max-[1300px]:text-sm text-xl">Shipping & handling</div>
              </div>
              <div className="w-[40%] text-right">
                <div className="max-[1300px]:text-lg text-3xl">₹ 5000</div>
                <div className="max-[1300px]:text-sm text-xl">calculated at checkout</div>
              </div>
            </div>
          </div>
          <div className="flex-[2]">
            {currentState=="SunGlass" && <SunGlassPrescription save={save} setSave={setSave} />}
            {currentState=="MultiFocal" && <MultiFocalPrescription save={save} setSave={setSave} />}
            {currentState=="Spherical" && <SphericalPrescription save={save} setSave={setSave} />}
            {currentState=="Toric" && <ToricPrescription save={save} setSave={setSave} />}
          </div>
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
