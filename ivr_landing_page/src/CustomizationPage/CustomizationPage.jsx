import Navbar from "@/components/Navbar/Navbar";
import React, { useEffect, useState } from "react";
import BackGround from "@/assets/back.png";
import LensType from "./components/LensType";
import LensDescription from "./components/Prescription";
import Prescription from "./components/Prescription";
import ConfirmDetails from "./components/ConfirmDetails";
import FillEyeDetails from "./components/FillEyeDetails";
import LensPackage from "./components/LensPackage";
import Cart from "./components/Cart";
import personalInfoStore from "@/stores/PersonalInfoStore";

const CustomizationPage = () => {
  const [nav, setNav] = useState("FillEyeDetails");
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
            currentState={"normalPrescription"}
          />
          // normalPrescription
        )}
        {nav == "ConfirmDetails" && <ConfirmDetails setNav={setNav} />}
        {nav == "LensPackage" && <LensPackage setNav={setNav} />}
        {nav == "Cart" && <Cart setNav={setNav} />}
      </div>
    </>
  );
};

export default CustomizationPage;
