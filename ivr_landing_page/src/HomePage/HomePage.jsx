import React from "react";
import Offers from "./components/Offers";
import Navbar from "./components/HeroSection";
import HeroSection from "./components/HeroSection";
import GlassListComponent from "./components/GlassListComponent";
import OurTopPicks from "./components/OurTopPicks";
import AdvertTop from "./components/AdvertTop";
import cust_1 from "@/assets/cust_1.jpg";
import AdvertBottom from "./components/AdvertBottom";
import Footer from "./components/Footer";
import eyeGlass1 from "@/assets/eyeGlass1.jpg";
import eyeGlass2 from "@/assets/eyeGlass2.jpg";
import eyeGlass3 from "@/assets/eyeGlass3.jpg";
import eyeGlass4 from "@/assets/eyeGlass4.jpg";
import eyeGlass5 from "@/assets/eyeGlass5.jpg";
import sunGlass1 from "@/assets/sunGlass1.jpg";
import sunGlass2 from "@/assets/sunGlass2.jpg";
import sunGlass3 from "@/assets/sunGlass3.jpg";
import sunGlass4 from "@/assets/sunGlass4.jpg";
import sunGlass5 from "@/assets/sunGlass5.jpg";

const HomePage = () => {
  const EyeGlassArray = [
    {
      image: eyeGlass1,
      text: "RimLess Glass",
    },
    {
      image: eyeGlass2,
      text: "Transparent Frame",
    },
    {
      image: eyeGlass3,
      text: "Rich Acetate Glasses",
    },
    {
      image: eyeGlass4,
      text: "Blue Computer Glasses",
    },
    {
      image: eyeGlass5,
      text: "Metal Work",
    },
  ];
  const SunGlassArray = [
    {
      image: sunGlass1,
      text: "RimLess Glass",
    },
    {
      image: sunGlass2,
      text: "Transparent Frame",
    },
    {
      image: sunGlass3,
      text: "Rich Acetate Glasses",
    },
    {
      image: sunGlass4,
      text: "Blue Computer Glasses",
    },
    {
      image: sunGlass5,
      text: "Metal Work",
    },
  ];
  return (
    <div className="relative w-full">
      <Offers />
      <HeroSection />
      <div className="w-5/6 mx-auto">
        <GlassListComponent
          prodArray={EyeGlassArray}
          link={null}
          heading={"Eyeware Glasses"}
        />
        <OurTopPicks />
        <AdvertTop />
        <GlassListComponent
          prodArray={SunGlassArray}
          link={null}
          border_radius
          heading={"Sun Glasses"}
        />
        <AdvertBottom />
      </div>
      <Footer/>
    </div>
  );
};

export default HomePage;
