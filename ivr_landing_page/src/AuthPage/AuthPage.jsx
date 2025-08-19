import React, { useState } from "react";
import Video from "@/assets/productPageVideo.mp4";
import LoginComponent from "./components/LoginComponent";
import Logo from "@/components/Logo/Logo";
import SignUpComponent from "./components/SignUpComponent";

const AuthPage = () => {
  const [auth, setAuth] = useState("login");
  return (
    <div className="w-[100vw] h-[100vh] relative flex justify-center items-center transition-all duration-100 ease-in-out overflow-hidden  bg-blue-300">
      {auth === "login" ? (
        <LoginComponent setAuth={setAuth} />
      ) : (
        <SignUpComponent setAuth={setAuth} />
      )}
      <div className="absolute top-[7%] left-[4%] z-[10]">
        <Logo size={40} />
      </div>
      <video
        className="absolute top-[50%] left-[50%] -translate-[50%] w-[95vw] h-[92vh] object-cover rounded-4xl"
        autoPlay
        muted
        loop
      >
        <source src={Video} type="video/mp4" className="h-full w-full" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default AuthPage;
