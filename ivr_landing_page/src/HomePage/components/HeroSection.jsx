import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import React, { useState } from "react";
// import Logo from "@/assets/logo.png";
import Caraousal from "./Caraousal/Caraousal";
import CustomButton from "@/components/Button/CustomButton.jsx";
import man from "@/assets/man.png";
import kid from "@/assets/kid.jpg";
import woman from "@/assets/woman.jpg";
import EyeGlassesLinkVid from "@/assets/EyeGlassesLinkVid.mp4";
import SunGlassesLinkVid from "@/assets/SunGlassesLinkVid.mp4";
import UserIcon from "@/assets/navbar_user_icon.png";
import MoreIcon from "@/assets/more_icon.png";
import { CiUser } from "react-icons/ci";
import { CgDetailsMore } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router";
import Logo from "@/components/Logo/Logo"

const HeroSection = () => {
  const [link, setLink] = useState("none");
  const changeLink = (newlink) => {
    if (newlink == link) setLink("none");
    else setLink(newlink);
  };
  return (
    <>
      <div className="w-full h-screen relative">
        <div className="absolute z-10 top-0 left-0 flex flex-col justify-between items-center w-full h-full py-12 px-14">
          <div className="h-fit w-full flex justify-between items-center text-xl mt-4">
            <Logo size={40} />
            {/* LINKS SECTION */}
            <div className="text-white flex gap-8 text-xl">
              <div
                className={`${
                  link == "eye" ? "text-theme-color1" : "text-white"
                } hover:cursor-pointer`}
                onClick={() => changeLink("eye")}
              >
                EYE GLASSES
              </div>
              <div
                className={`${
                  link == "computer" ? "text-theme-color1" : "text-white"
                } hover:cursor-pointer`}
                onClick={() => changeLink("computer")}
              >
                COMPUTER GLASSES
              </div>
              <div
                className={`${
                  link == "sun" ? "text-theme-color1" : "text-white"
                } hover:cursor-pointer`}
                onClick={() => changeLink("sun")}
              >
                SUN GLASSES
              </div>
              <div
                className={`${
                  link == "power" ? "text-theme-color1" : "text-white"
                } hover:cursor-pointer`}
                onClick={() => changeLink("power")}
              >
                POWER SUNGLASSES
              </div>
              {/* LINK - CONTACT SECTION */}
              <div className="relative ">
                <div
                  className={`${
                    link == "contact" ? "text-theme-color1" : "text-white"
                  } hover:cursor-pointer`}
                  onClick={() => changeLink("contact")}
                >
                  CONTACT LENSES
                </div>
                <div
                  className={`${
                    link == "contact" ? "max-h-[200px] p-6 " : "max-h-[0px] "
                  } transition-all ease-in-out duration-200 absolute overflow-hidden w-60 left-[-15%] top-[200%] backdrop-blur-md text-2xl text-zinc-500 bg-white/80 rounded-2xl space-y-3`}
                >
                  <div>By Disposibility</div>
                  <div>By Color</div>
                </div>
              </div>
              {/* LINK - ACCESSORIES SECTION */}
              <div className="relative ">
                <div
                  className={`${
                    link == "access" ? "text-theme-color1" : "text-white"
                  } hover:cursor-pointer`}
                  onClick={() => changeLink("access")}
                >
                  ACCESSORIES
                </div>
                <div
                  className={`${
                    link == "access" ? "max-h-[350px] p-6 " : "max-h-[0px]"
                  } transition-all ease-in-out duration-200 absolute overflow-hidden left-[-30%] top-[200%] backdrop-blur-md text-2xl text-zinc-500 bg-white/80 rounded-2xl space-y-3`}
                >
                  <div>Contact lens Solutions</div>
                  <div>Chains</div>
                  <div>Lens Cleaner</div>
                  <div>Packaging Case</div>
                </div>
              </div>
            </div>
            <CustomButton />
            {/* LINK - USER ICON SECTION */}
            <div className="relative ">
              <CiUser
                className={`${
                  link == "user" ? "text-theme-color1" : "text-white"
                } w-[30px] h-[30px] hover:cursor-pointer`}
                onClick={() => changeLink("user")}
                strokeWidth={1.5}
              />
              <div
                className={`${
                  link == "user" ? "max-h-[350px] p-6 " : "max-h-[0px]"
                } transition-all ease-in-out duration-200 absolute overflow-hidden w-52 left-[-300%] top-[200%] backdrop-blur-md text-2xl text-zinc-500 bg-white/80 rounded-2xl space-y-3`}
              >
                <div>Your Account</div>
                <div>Sign Out</div>
              </div>
            </div>
            <CiSearch
              className={`${
                link == "search" ? "text-theme-color1" : "text-white"
              } w-[30px] h-[30px] hover:cursor-pointer`}
              onClick={() => changeLink("search")}
              strokeWidth={1.5}
            />
            {/* LINK - MORE ICON SECTION */}
            <div className="relative ">
              <CgDetailsMore
                className={`${
                  link == "more" ? "text-theme-color1" : "text-white"
                } w-[30px] h-[30px] hover:cursor-pointer`}
                onClick={() => changeLink("more")}
              />
              <div
                className={`${
                  link == "more" ? "max-h-[350px] p-6 " : "max-h-[0px]"
                } transition-all ease-in-out duration-200 absolute overflow-hidden w-60 left-[-600%] top-[200%] backdrop-blur-md text-2xl text-zinc-500 bg-white/80 rounded-2xl space-y-3`}
              >
                <div>Your orders</div>
                <div>Your Wishlist</div>
                <div>Your save items</div>
              </div>
            </div>
          </div>

          {/* LINK - EYE GLASSES SECTION */}
          <div
            className={`${
              link == "eye" ? "max-h-[550px] p-6" : "max-h-0"
            } transition-all ease-in-out duration-300 flex  overflow-hidden w-[95%] backdrop-blur-md bg-white/80 justify-between rounded-2xl`}
          >
            <div className="h-full space-y-6">
              <div className="text-theme-color1 text-3xl font-semibold">
                Gender
              </div>
              <div className="flex gap-2 items-center text-2xl text-zinc-500">
                <img
                  src={man}
                  className="w-25 h-25 rounded-xl object-cover object-top"
                  alt="men"
                />
                <span>Men</span>
              </div>
              <div className="flex gap-2 items-center text-2xl text-zinc-500">
                <img
                  src={woman}
                  className="w-25 h-25 rounded-xl object-cover object-top"
                  alt="women"
                />
                <span>Women</span>
              </div>
              <div className="flex gap-2 items-center text-2xl text-zinc-500">
                <img
                  src={kid}
                  className="w-25 h-25 rounded-xl object-cover object-top"
                  alt="kids"
                />
                <span>Kids</span>
              </div>
            </div>
            <div className="h-full space-y-10">
              <div className="text-theme-color1 text-3xl font-semibold">
                Frame Type
              </div>
              <div className="space-x-2 text-2xl text-zinc-500">
                Rectangle Frame
              </div>
              <div className="space-x-2 text-2xl text-zinc-500">
                Square Frame
              </div>
              <div className="space-x-2 text-2xl text-zinc-500">
                Round Frame
              </div>
              <div className="space-x-2 text-2xl text-zinc-500">
                Cat-Eye Frame
              </div>
              <div className="space-x-2 text-2xl text-zinc-500">Oval Frame</div>
            </div>
            <div className="h-full space-y-10">
              <div className="text-theme-color1 text-3xl font-semibold">
                Style
              </div>
              <div className="space-x-2 text-2xl text-zinc-500">Rimmed</div>
              <div className="space-x-2 text-2xl text-zinc-500">
                Semi-Rimmed
              </div>
              <div className="space-x-2 text-2xl text-zinc-500">Rimless</div>
            </div>
            <div className="w-[462px] h-[462px]">
              <video
                className="w-full h-full rounded-3xl object-fill"
                autoPlay
                muted
                loop
              >
                <source
                  src={EyeGlassesLinkVid}
                  type="video/mp4"
                  className="h-full w-full"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* LINK - SUN GLASSES SECTION */}
          <div
            className={`${
              link == "sun" ? "max-h-[550px] p-6" : "max-h-0"
            } transition-all ease-in-out duration-300  flex overflow-hidden w-[95%] backdrop-blur-md bg-white/80 justify-between rounded-2xl`}
          >
            <div className="h-full space-y-6">
              <div className="text-theme-color1 text-3xl font-semibold">
                Gender
              </div>
              <div className="flex gap-2 items-center text-2xl text-zinc-500">
                <img
                  src={man}
                  className="w-25 h-25 rounded-xl object-cover object-top"
                  alt="men"
                />
                <span>Men</span>
              </div>
              <div className="flex gap-2 items-center text-2xl text-zinc-500">
                <img
                  src={woman}
                  className="w-25 h-25 rounded-xl object-cover object-top"
                  alt="women"
                />
                <span>Women</span>
              </div>
            </div>
            <div className="h-full space-y-10">
              <div className="text-theme-color1 text-3xl font-semibold">
                Shape
              </div>
              <div className="text-2xl text-zinc-500">Aviator </div>
              <div className="text-2xl text-zinc-500">Way farer</div>
              <div className="text-2xl text-zinc-500">Wraparound</div>
              <div className="text-2xl text-zinc-500">Rectangle</div>
              <div className="text-2xl text-zinc-500">Round</div>
            </div>
            <div className="w-[500px] h-[400px]">
              <video
                className="w-full h-full rounded-3xl object-fill"
                autoPlay
                muted
                loop
              >
                <source src={SunGlassesLinkVid} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* TEXT-SECTION */}
          <div className="h-fit text-center w-fit text-white space-y-3">
            <div className="text-5xl">ECO ACETATE</div>
            <div className="text-2xl">From Nature, With Love</div>
            <Link to="/filter">
              <Button className=" w-4/6 h-12 py-4 text-lg rounded-full text-center  cursor-pointer text-white bg-green-500 hover:bg-green-600 active:bg-green-700">
                Discover Now
              </Button>
            </Link>
          </div>
        </div>
        <Caraousal/>
      </div>
    </>
  );
};

export default HeroSection;

{
  /* LINK - CONTACT LENSES SECTION */
}
{
  /* <div className={`${link=="contact"?"block":"hidden"} absolute right-[28.5%] top-[16%] p-6 backdrop-blur-md text-2xl text-zinc-500 bg-white/80 rounded-2xl space-y-3`}>
        <div>By Disposibility</div>
        <div>By Color</div>
      </div> */
}

{
  /* LINK - ACCESSORIES SECTION */
}
{
  /* <div className={`${link=="access"?"block":"hidden"} absolute right-[16%] top-[16%] p-6 backdrop-blur-md text-2xl text-zinc-500 bg-white/80 rounded-2xl space-y-3`}>
        <div>Contact lens Solutions</div>
        <div>Chains</div>
        <div>Lens Cleaner</div>
        <div>Packaging Case</div>
      </div> */
}

{
  /* LINK - USER ICON SECTION */
}
{
  /* <div className={`${link=="user"?"block":"hidden"} absolute right-[4%] top-[16%] p-6 backdrop-blur-md text-2xl text-zinc-500 bg-white/80 rounded-2xl space-y-3`}>
        <div>Your Account</div>
        <div>Sign Out</div>
      </div> */
}

{
  /* LINK - MORE ICON SECTION */
}
{
  /* <div className={`${link=="more"?"block":"hidden"} absolute right-[1%] top-[16%] p-6 backdrop-blur-md text-2xl text-zinc-500 bg-white/80 rounded-2xl space-y-3`}>
        <div>Your orders</div>
        <div>Your Wishlist</div>
        <div>Your save items</div>
      </div> */
}
