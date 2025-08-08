import Navbar from "@/components/Navbar/Navbar";
import React, { useState } from "react";
import BackGround from "@/assets/back.png";
import LensType from "./components/LensType";
import LensDescription from "./components/Prescription";
import Prescription from "./components/Prescription";
import ConfirmDetails from "./components/ConfirmDetails";
import FillEyeDetails from "./components/FillEyeDetails";
import LensPackage from "./components/LensPackage";
import Cart from "./components/Cart";

const CustomizationPage = () => {
  const [nav,setNav]=useState("LensType")
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
        <Navbar />
        {nav=="LensType" && <LensType setNav={setNav}/>}
        {nav=="Prescription" && <Prescription setNav={setNav}/>}
        {nav=="FillEyeDetails" && <FillEyeDetails setNav={setNav} state={state} setState={setState}/>}
        {nav=="ConfirmDetails" && <ConfirmDetails setNav={setNav} {...state}/>}
        {nav=="LensPackage" && <LensPackage setNav={setNav}/>}
        {nav=="Cart" && <Cart setNav={setNav}/>}
      </div>
    </>
  );
};

export default CustomizationPage;
