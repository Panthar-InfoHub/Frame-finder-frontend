import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import BackGround from "@/assets/back.png";
import LensType from "./components/LensType";
import LensDescriptionPage from "./components/LensDescriptionPage";
import PrescriptionDetails from "./components/PrescriptionDetails";
import ConfirmDetails from "./components/ConfirmDetails";

const CustomizationPage = () => {
  return (
    <>
      <Navbar />
      <div
        className="h-screen bg-blue-100"
        style={{
          backgroundImage: `url(${BackGround})`,
          backgroundSize: "cover",
        }}
      >
        {/* <LensType /> */}
        {/* <LensDescriptionPage /> */}
        {/* <PrescriptionDetails/> */}
        <ConfirmDetails/>
      </div>
    </>
  );
};

export default CustomizationPage;
