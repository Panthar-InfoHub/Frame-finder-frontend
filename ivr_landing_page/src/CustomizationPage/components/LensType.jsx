import React from "react";
import singleVision from "@/assets/singleVision.png";
import biFocal from "@/assets/biFocal.png";
import progressive from "@/assets/progressive.png";
import nonPrescription from "@/assets/nonPrescription.png";
import { IoIosArrowBack } from "react-icons/io";
import Arrow from "@/assets/ArrowDown.png"

const LensType = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-3/5 h-fit flex flex-col gap-3">
        <div className="flex gap-2 items-center ">
          <div className="hover:bg-white/20 hover:shadow-lg border border-transparent hover:border-white/30 hover:backdrop-blur-xs rounded-full hover:cursor-pointer">
            <IoIosArrowBack size={30} />
          </div>
          <div className="text-3xl">Select Lens Type</div>
        </div>
        <div className="bg-white rounded-md p-4 flex items-center gap-10">
          <img src={singleVision} alt="" className="w-25 h-25 rounded-md" />
          <div className="mr-[25%]">
            <div className="text-2xl font-medium">Single Vision</div>
            <div className="text-xl">
              For distance or near vision (Thin, anti-glare, blue-cut options)
            </div>
          </div>
          <img src={Arrow} className="rotate-270"/>
        </div>
        <div className="bg-white rounded-md p-4 flex items-center gap-10">
          <img src={biFocal} alt="" className="w-25 h-25 rounded-md" />
          <div className="mr-[25%]">
            <div className="text-2xl font-medium">Bi-Focal</div>
            <div className="text-xl">
              For distance or near vision (Thin, anti-glare, blue-cut options)
            </div>
          </div>
          <img src={Arrow} className="rotate-270"/>
        </div>
        <div className="bg-white rounded-md p-4 flex items-center gap-10">
          <img src={progressive} alt="" className="w-25 h-25 rounded-md" />
          <div className="mr-[25%]">
            <div className="text-2xl font-medium">Progressive</div>
            <div className="text-xl">
              For distance or near vision (Thin, anti-glare, blue-cut options)
            </div>
          </div>
          <img src={Arrow} className="rotate-270 hover:"/>
        </div>
        <div className="bg-white rounded-md p-4 flex items-center gap-10">
          <img src={nonPrescription} alt="" className="w-25 h-25 rounded-md" />
          <div className="mr-[25%]">
            <div className="text-2xl font-medium">Non Prescription</div>
            <div className="text-xl">
              For distance or near vision (Thin, anti-glare, blue-cut options)
            </div>
          </div>
          <img src={Arrow} className="rotate-270"/>
        </div>
      </div>
    </div>
  );
};

export default LensType;
