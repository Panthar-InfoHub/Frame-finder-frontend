import React, { useState } from "react";
import backImage from "../assets/profileImage.png";
import AccountInfo from "./components/AccountInfo";
import MyOrder from "./components/MyOrder";
import Address from "./components/Address";
import MyPrescription from "./components/MyPrescription";
import Arrow from "@/assets/ArrowDown.png";

const ProfilePage = () => {
  const [localNav, setLocalNav] = useState("prescriptions");
  const handleNav = (nav) => {
    if (localNav != nav) setLocalNav(nav);
  };
  // console.log(backImage)
  return (
    <div className="relative h-[100vh] w-[100vw] overflow-hidden px-8 flex py-6 pt-20">
      {/* <div>hello</div>
      <img src={backImage} alt="" className="absolute top-0 left-0" />
      <img src={backImage} alt="" className="absolute top-0 right-0" />
      <img src={backImage} alt="" className="absolute bottom-0 left-0" /> */}
      <img
        src={Arrow}
        className="absolute top-[3%] left-[1%] rotate-90 cursor-pointer py-3 px-2 transition-all ease-in-out hover:bg-green-200 active:bg-green-300 rounded-full"
      />

      <div className="flex-[1] h-full rounded-3xl bg-green-200 text-lg pt-8 space-y-4">
        <div
          className={`px-8 ${
            localNav == "order" ? "bg-theme-color1 text-white" : ""
          } py-8 rounded-2xl cursor-pointer trasition-all ease-in-out`}
          onClick={() => handleNav("order")}
        >
          My Order
        </div>
        <div
          className={`px-8 ${
            localNav == "account" ? "bg-theme-color1 text-white" : ""
          } py-8 rounded-2xl cursor-pointer trasition-all ease-in-out`}
          onClick={() => handleNav("account")}
        >
          Account Information
        </div>
        <div
          className={`px-8 ${
            localNav == "address" ? "bg-theme-color1 text-white" : ""
          } py-8 rounded-2xl cursor-pointer trasition-all ease-in-out`}
          onClick={() => handleNav("address")}
        >
          Address Book
        </div>
        <div
          className={`px-8 ${
            localNav == "prescriptions" ? "bg-theme-color1 text-white" : ""
          } py-8 rounded-2xl cursor-pointer trasition-all ease-in-out`}
          onClick={() => handleNav("prescriptions")}
        >
          My Prescriptions
        </div>
        <div
          className={`px-8 ${
            localNav == "logout" ? "bg-theme-color1 text-white" : ""
          } py-8 rounded-2xl cursor-pointer trasition-all ease-in-out`}
          onClick={() => handleNav("logout")}
        >
          Logout
        </div>
      </div>
      <div className="flex-[3] pl-10">
        {localNav == "account" && <AccountInfo />}
        {localNav == "order" && <MyOrder />}
        {localNav == "address" && <Address />}
        {localNav == "prescriptions" && <MyPrescription />}
      </div>
    </div>
  );
};

export default ProfilePage;
