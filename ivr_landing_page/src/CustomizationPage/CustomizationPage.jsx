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
  const { type,lens_type } = useLocation().state;
  const [nav, setNav] = useState({
    prev: "product",
    curr: type,
  });
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
        {nav.curr == "LensType" && <LensType setNav={setNav} />}
        {nav.curr == "Prescription" && <Prescription setNav={setNav} />}
        {nav.curr == "FillEyeDetails" && <FillEyeDetails setNav={setNav} />}
        {nav.curr == "ConfirmDetails" && <ConfirmDetails setNav={setNav} />}
        {nav.curr == "LensPackage" && <LensPackage setNav={setNav} />}
        {nav.curr == "Cart" && (
          <Cart
            setNav={setNav}
            nav={nav}
          />
        )}
        {nav.curr == "product" && handleBack()}
      </div>
    </>
  );
};

export default CustomizationPage;
