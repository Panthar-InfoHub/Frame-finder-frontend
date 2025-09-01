import Navbar from "@/components/Navbar/Navbar";
import React, { useEffect, useState } from "react";
import BackGround from "@/assets/back.png";
import LensType from "./components/LensType";
import Prescription from "./components/Prescription";
import ConfirmDetails from "./components/ConfirmDetails";
import FillEyeDetails from "./components/FillEyeDetails";
import LensPackage from "./components/LensPackage";
import Cart from "./components/Cart";

const CustomizationPage = () => {
  const [nav, setNav] = useState("ConfirmDetails");
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
        {nav == "LensType" && <LensType setNav={setNav} />}
        {nav == "Prescription" && <Prescription setNav={setNav} />}
        {nav == "FillEyeDetails" && (
          <FillEyeDetails
            setNav={setNav}
            currentState={"Spherical"}
          />
        )}
        {nav == "ConfirmDetails" && <ConfirmDetails setNav={setNav} />}
        {nav == "LensPackage" && <LensPackage setNav={setNav} />}
        {nav == "Cart" && <Cart setNav={setNav} />}
      </div>
    </>
  );
};

export default CustomizationPage;
