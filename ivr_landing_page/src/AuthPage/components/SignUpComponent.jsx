import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import google from "@/assets/devicon_google.png";
import apple from "@/assets/devicon_apple.png";

const SignUpComponent = ({setAuth}) => {
  const [state, setState] = useState({
    first: "",
    last: "",
    email: "",
    phone: "",
  });
  const [error, setError] = useState({});

  const checkState = () => {
    const newError = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!state.first) {
      newError.first = "Enter your First Name";
    }
    if (!state.last) {
      newError.last = "Enter your Last Name";
    }
    if (!state.email) {
      newError.email = "Enter your Email Id";
    } else if (!emailRegex.test(state.email)) {
      newError.email = "Enter a valid Email Id";
    }
    if (!state.phone) {
      newError.phone = "Enter a Phone Number";
    } else if (state.phone.length != 10) {
      newError.phone = "Enter a valid phone number";
    }
    return newError;
  };

  const handleSubmit = () => {
    const newErrors = checkState();
    if (Object.keys(newErrors).length !== 0) setError({ ...newErrors });
    else{
      if(Object.keys(error).length !== 0) setError({});
      console.log(state)
    }
  };
  return (
    <div className="bg-white/30 backdrop-blur-lg border-2 border-white/20 rounded-lg py-10 px-20 z-[10] flex flex-col gap-6 items-center">
      {/* First anme & Last Name */}
      <div className="flex gap-4">
        <div className="relative">
          <input
            type="text"
            value={state.first}
            onChange={(e) => setState({ ...state, first: e.target.value })}
            placeholder="First Name"
            className="outline-none p-2 border-b-2 focus:border-green-400 text-2xl w-70"
          />
          <div className="absolute text-red-400 text-sm">{error.first}</div>
        </div>
        <div className="relative">
          <input
            type="text"
            value={state.last}
            onChange={(e) => setState({ ...state, last: e.target.value })}
            placeholder="Last Name"
            className="outline-none p-2 border-b-2 focus:border-green-400 text-2xl w-70"
          />
          <div className="absolute text-red-400 text-sm">{error.last}</div>
        </div>
      </div>
      {/* Email */}
      <div className="relative">
        <input
          type="email"
          value={state.email}
          onChange={(e) => setState({ ...state, email: e.target.value })}
          placeholder="Email"
          className="outline-none p-2 border-b-2 focus:border-green-400 text-2xl w-140"
        />
        <div className="absolute text-red-400 text-sm">{error.email}</div>
      </div>
      {/* Phone Number */}
      <div className="relative">
        <input
          type="number"
          value={state.phone}
          onChange={(e) => setState({ ...state, phone: e.target.value })}
          placeholder="Phone"
          className="outline-none p-2 border-b-2 focus:border-green-400 text-2xl w-140 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
        <div className="absolute text-red-400 text-sm">{error.phone}</div>
      </div>
      <Button
        className="px-10 py-7 text-lg rounded-full text-center bg-green-500 text-white active:bg-green-700 hover:bg-green-600 cursor-pointer"
        onClick={handleSubmit}
      >
        Sign Up
      </Button>
      <div className="text-lg">
        Already have an account{" "}
        <span className="text-green-500 active:text-theme-color1 cursor-pointer underline" onClick={()=>setAuth("login")}>
          Login
        </span>
      </div>
      <div className="flex gap-8">
        <img src={google} alt="google Logo" className="cursor-pointer" />
        <img src={apple} alt="apple Logo" className="cursor-pointer" />
      </div>
    </div>
  );
};

export default SignUpComponent;
