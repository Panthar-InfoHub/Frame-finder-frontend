import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import BackGround from "@/assets/back.png";
import LensType from "./components/LensType";
import LensDescriptionPage from "./components/LensDescriptionPage";

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
        <LensType />
        {/* <LensDescriptionPage /> */}
      </div>
    </>
  );
};

export default CustomizationPage;
