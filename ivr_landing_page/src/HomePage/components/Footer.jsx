import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import linkedIcon from "../../assets/linkedin.png";
import FaceBookIcon from "../../assets/FaceBook.png";
import InstaIcon from "../../assets/Insta.png";
import TwitterIcon from "../../assets/Twitter.png";

const Footer = () => {
  return (
    <div className="bg-[#00aa78] text-white py-14 mt-72 h-screen">
      <div className="font-bona-novasc mx-auto w-fit text-[200px] mb-18">FRAME FINDER</div>
      <div className="flex justify-between w-3/4 mx-auto">
        <div className="space-y-6">
          <div className="text-[40px]">Shop</div>
          <div className="text-2xl">EyeGlasses</div>
          <div className="text-2xl">SunGlasses</div>
          <div className="text-2xl">Collections</div>
          <div className="text-2xl">Size Guide</div>
        </div>
        <div className="space-y-6">
          <div className="text-[40px]">About Us</div>
          <div className="text-2xl">Our Story</div>
          <div className="text-2xl">Careers</div>
          <div className="text-2xl">Press</div>
          <div className="text-2xl">Blog</div>
          <div className="text-2xl">Store Locator</div>
        </div>
        <div className="space-y-6">
          <div className="text-[40px]">Information</div>
          <div className="text-2xl">Help</div>
          <div className="text-2xl">Shipping Handling</div>
          <div className="text-2xl">Exchange & Returns</div>
          <div className="text-2xl">Terms & Conditions</div>
          <div className="text-2xl">Privacy Policy</div>
        </div>
        <div className="flex flex-col gap-7 justify-center">
          <div className="text-2xl">Chat With Us</div>
          <div className="text-2xl">+91-9999999999</div>
          <div className="flex gap-3">
            <div className="text-2xl"><img src={linkedIcon} alt="" className="w-8 h-8"/></div>
            <div className="text-2xl"><img src={FaceBookIcon} alt="" className="w-8 h-8"/></div>
            <div className="text-2xl"><img src={InstaIcon} alt="" className="w-8 h-8"/></div>
            <div className="text-2xl"><img src={TwitterIcon} alt="" className="w-8 h-8"/></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
