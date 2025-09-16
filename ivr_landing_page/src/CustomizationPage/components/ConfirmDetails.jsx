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
import SunGlassConfirm from "./ConfirmPrescriptions/SunGlassConfirm";
import MultiFocalConfirm from "./ConfirmPrescriptions/MultiFocalConfirm";
import SphericalConfirm from "./ConfirmPrescriptions/SphericalConfirm";
import ToricConfirm from "./ConfirmPrescriptions/ToricConfirm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ConfirmDetails = ({ pushPositionStack,popPositionStack }) => {
  const [head, setHead] = useState(false);
  const {
    sunGlassPrescription,
    sphericalPrescription,
    toricPrescription,
    multiFocalPrescription,
  } = personalInfoStore();

  let defaultTab;
  if (sunGlassPrescription.save) defaultTab = "SunGlass";
  else if (sphericalPrescription.save) defaultTab = "Spherical";
  else if (toricPrescription.save) defaultTab = "Toric";
  else if (multiFocalPrescription.save) defaultTab = "MultiFocal";

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1500) setHead(true);
      else if (window.innerWidth > 1500) setHead(false);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="w-screen h-screen overflow-y-auto">
      <div className="max-[800px]:w-[98%] w-[70%]  h-fit bg-white shadow-lg rounded-md relative min-[1500px]:flex min-[1500px]:gap-20 p-16 mt-45 max-[1500px]:mb-20 mx-auto animate-slideUp">
        <ArrowLeft
          className="w-11 h-11 rounded-full text-green-600 absolute top-[2%] left-[1%] p-2 cursor-pointer hover:bg-green-200 active:bg-green-300"
          onClick={()=>popPositionStack()}
        />
        {head && (
          <div className="text-2xl text-center mb-5">
            Confirm Your Prescription
          </div>
        )}
        <div className="flex-[4]">
          <img
            src={EyeGlass2}
            alt=""
            className="w-full h-100 border-3 rounded-xl object-cover"
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
        <div className="flex-[5] space-y-6">
          {!head && (
            <div className="text-2xl text-center">
              Confirm Your Prescription
            </div>
          )}
          <div className={`text-lg ${head && "mt-8"}`}>
            Make sure your prescription matches the information below. Pay close
            attention to the plus (+) or minus (-).
          </div>
          <div className="text-lg">To edit, click the value.</div>
          <div className="text-lg">
            Prescription: <span className="text-green-600">Single Vision</span>
          </div>
          <Tabs defaultValue={defaultTab} className="w-full">
            <div className="flex justify-between items-baseline gap-2">
              <TabsList className="bg-green-200 mb-4">
                <TabsTrigger
                  disabled={!sunGlassPrescription.save}
                  value="SunGlass"
                  className="cursor-pointer"
                >
                  SunGlass
                </TabsTrigger>
                <TabsTrigger
                  disabled={!multiFocalPrescription.save}
                  value="MultiFocal"
                  className="cursor-pointer"
                >
                  MultiFocal
                </TabsTrigger>
                <TabsTrigger
                  disabled={!sphericalPrescription.save}
                  value="Spherical"
                  className="cursor-pointer"
                >
                  Spherical
                </TabsTrigger>
                <TabsTrigger
                  disabled={!toricPrescription.save}
                  value="Toric"
                  className="cursor-pointer"
                >
                  Toric
                </TabsTrigger>
              </TabsList>
              <Button
                variant="ghost"
                className="text-lg border-2 border-green-300 active:border-green-600 cursor-pointer px-8 py-6 rounded-full"
              >
                Edit
              </Button>
            </div>
            <TabsContent value="SunGlass">
              <SunGlassConfirm />
            </TabsContent>
            <TabsContent value="MultiFocal">
              <MultiFocalConfirm />
            </TabsContent>
            <TabsContent value="Spherical">
              <SphericalConfirm />
            </TabsContent>
            <TabsContent value="Toric">
              <ToricConfirm />
            </TabsContent>
          </Tabs>
        </div>

        <Button
          className="absolute bottom-[3%] right-[3%] text-lg bg-green-500 hover:bg-green-600 active:bg-green-700 cursor-pointer px-8 py-6 rounded-full"
          onClick={()=>pushPositionStack("LensPackage")}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default ConfirmDetails;
