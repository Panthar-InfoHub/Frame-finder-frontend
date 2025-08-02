import Navbar from "@/components/Navbar/Navbar";
import React, { useState } from "react";
import BackGround from "@/assets/back.png";
import LensType from "./components/LensType";
import LensDescription from "./components/Prescription";
import Prescription from "./components/Prescription";
import ConfirmDetails from "./components/ConfirmDetails";
import FillEyeDetails from "./components/FillEyeDetails";
import LensPackage from "./components/LensPackage";

const CustomizationPage = () => {
  const [nav,setNav]=useState("LensPackage")
  const [state, setState] = useState({
    sph_od: undefined,
    sph_os: undefined,
    cyl_od: undefined,
    cyl_os: undefined,
    axis_od: undefined,
    axis_os: undefined,
    pd: undefined,
  });
  return (
    <>
      <div
        className="h-screen bg-blue-100"
        style={{
          backgroundImage: `url(${BackGround})`,
          backgroundSize: "cover",
        }}
      >
      {/* <div className="fixed top-0 left-0 w-full h-full -z-10 bg-blue-100">
        <img src={BackGround} className="w-full h-full object-cover" alt="bg" />
      </div> */}
      {/* <div class="relative z-10"> */}
      <Navbar />
        {nav=="LensType" && <LensType setNav={setNav}/>}
        {nav=="Prescription" && <Prescription setNav={setNav}/>}
        {nav=="FillEyeDetails" && <FillEyeDetails setNav={setNav} state={state} setState={setState}/>}
        {nav=="ConfirmDetails" && <ConfirmDetails setNav={setNav} {...state}/>}
        {nav=="LensPackage" && <LensPackage setNav={setNav}/>}
        {/* </div> */}
      </div>
    </>
  );
};

export default CustomizationPage;
