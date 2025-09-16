import React, { useEffect, useRef, useState } from "react";
import EyeGlass2 from "@/assets/EyeGlass2.jpg";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import NormalPrescription from "./Prescriptions/SunGlassPrescription";
import SphericalPrescription from "./Prescriptions/SphericalPrescription";
import ToricPrescription from "./Prescriptions/ToricPrescription";
import MultiFocalPrescription from "./Prescriptions/MultiFocalPrescription";
import SunGlassPrescription from "./Prescriptions/SunGlassPrescription";
import { IoIosArrowForward } from "react-icons/io";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FillEyeDetails = ({ pushPositionStack,popPositionStack }) => {
  const [save, setSave] = useState(false);
  const [currentState, setCurrentState] = useState("Spherical");

  useEffect(() => {
    console.log("from save", save);
  }, [save]);

  

  return (
    <div className="relative w-screen h-screen flex justify-center items-center overflow-hidden">
      <div className="absolute max-[1500px]:w-fit max-[1500px]:mx-4 w-340 h-fit bg-white shadow-lg rounded-md p-8 px-10 mt-[5%] max-[1300px]:mt-[100px] animate-slideUp z-1">
        <ArrowLeft
          className="max-[1300px]:w-8 max-[1300px]:h-8 w-11 h-11 rounded-full text-green-600 absolute top-[2%] left-[1%] p-2 cursor-pointer hover:bg-green-200 active:bg-green-300"
          onClick={()=>popPositionStack()}
        />
        <div className="min-[1300px]:flex min-[1300px]:justify-between mb-[2%]">
          <div className="flex gap-5 justify-around min-[1300px]:pl-8 max-[1300px]:mb-6">
            <div
              className={`px-6 py-3 rounded-lg cursor-pointer ${
                currentState == "SunGlass" ? "bg-green-600" : "bg-green-400"
              } text-white`}
              onClick={() => setCurrentState("SunGlass")}
            >
              SunGlass
            </div>
            <div
              className={`px-6 py-3 rounded-lg cursor-pointer ${
                currentState == "MultiFocal" ? "bg-green-600" : "bg-green-400"
              } text-white`}
              onClick={() => setCurrentState("MultiFocal")}
            >
              MultiFocal
            </div>
            <div
              className={`px-6 py-3 rounded-lg cursor-pointer ${
                currentState == "Spherical" ? "bg-green-600" : "bg-green-400"
              } text-white`}
              onClick={() => setCurrentState("Spherical")}
            >
              Spherical
            </div>
            <div
              className={`px-6 py-3 rounded-lg cursor-pointer ${
                currentState == "Toric" ? "bg-green-600" : "bg-green-400"
              } text-white`}
              onClick={() => setCurrentState("Toric")}
            >
              Toric
            </div>
          </div>
          <div className="w-1/2 max-[1300px]:text-lg max-[1300px]:mx-auto text-2xl text-center">
            Fill in your Prescription Details for {currentState} Lenses
          </div>
        </div>
        <div className="min-[1300px]:flex gap-20 w-full h-[98%]">
          <div className="flex-[1]  max-[1300px]:mb-10">
            <img
              src={EyeGlass2}
              alt=""
              className="w-full mx-auto h-[70%] max-h-[500px] max-[1300px]:h-[350px] object-cover border-3 rounded-xl"
            />
            <div className="flex justify-between mt-4 w-full mx-auto">
              <div className="w-[40%]">
                <div className="max-[1300px]:text-lg text-3xl">Tecla</div>
                <div className="max-[1300px]:text-sm text-xl">
                  Shipping & handling
                </div>
              </div>
              <div className="w-[40%] text-right">
                <div className="max-[1300px]:text-lg text-3xl">₹ 5000</div>
                <div className="max-[1300px]:text-sm text-xl">
                  calculated at checkout
                </div>
              </div>
            </div>
          </div>
          <div className="flex-[1]">
            {currentState == "SunGlass" && (
              <SunGlassPrescription setSave={setSave} />
            )}
            {currentState == "MultiFocal" && (
              <MultiFocalPrescription save={save} setSave={setSave} />
            )}
            {currentState == "Spherical" && (
              <SphericalPrescription save={save} setSave={setSave} />
            )}
            {currentState == "Toric" && (
              <ToricPrescription save={save} setSave={setSave} />
            )}
          </div>
        </div>
        <Button
          disabled={!save}
          className="absolute bottom-[3%] right-[3%] text-lg bg-green-500 hover:bg-green-600 active:bg-green-700 cursor-pointer px-8 py-6 rounded-full"
          onClick={()=>pushPositionStack("ConfirmDetails")}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default FillEyeDetails;
