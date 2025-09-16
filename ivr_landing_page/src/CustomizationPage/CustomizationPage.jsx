import Navbar from "@/components/Navbar/Navbar";
import React, { useEffect, useState } from "react";
import BackGround from "@/assets/back.png";
import LensType from "./components/LensType";
import Prescription from "./components/Prescription";
import ConfirmDetails from "./components/ConfirmDetails";
import FillEyeDetails from "./components/FillEyeDetails";
import LensPackage from "./components/LensPackage";
import Cart from "./components/Cart";
import { useLocation, useNavigate } from "react-router";

const CustomizationPage = () => {
  // ! use lens_type accordingly
  const { type, lens_type } = useLocation().state;
  const [nav, setNav] = useState(["product", type]);
  const pushPositionStack = (position) =>
    setNav((state) => [...state, position]);

  const popPositionStack = () => setNav((state) => state.slice(0, -1));
  let navigate = useNavigate();
  const handleBack = () => navigate(-1);

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
        {nav[nav.length - 1] == "LensType" && (
          <LensType
            pushPositionStack={pushPositionStack}
            popPositionStack={popPositionStack}
          />
        )}
        {nav[nav.length - 1] == "Prescription" && (
          <Prescription
            pushPositionStack={pushPositionStack}
            popPositionStack={popPositionStack}
          />
        )}
        {nav[nav.length - 1] == "FillEyeDetails" && (
          <FillEyeDetails
            pushPositionStack={pushPositionStack}
            popPositionStack={popPositionStack}
          />
        )}
        {nav[nav.length - 1] == "ConfirmDetails" && (
          <ConfirmDetails
            pushPositionStack={pushPositionStack}
            popPositionStack={popPositionStack}
          />
        )}
        {nav[nav.length - 1] == "LensPackage" && (
          <LensPackage
            pushPositionStack={pushPositionStack}
            popPositionStack={popPositionStack}
          />
        )}
        {nav[nav.length - 1] == "Cart" && (
          <Cart
            pushPositionStack={pushPositionStack}
            popPositionStack={popPositionStack}
          />
        )}
        {nav[nav.length - 1] == "product" && handleBack()}
      </div>
    </>
  );
};

export default CustomizationPage;
