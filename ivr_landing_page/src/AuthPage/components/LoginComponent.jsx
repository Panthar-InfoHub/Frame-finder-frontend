import React, { useState } from "react";
import google from "@/assets/devicon_google.png";
import apple from "@/assets/devicon_apple.png";
import { Button } from "@/components/ui/button";

const LoginComponent = ({setAuth}) => {
  const [state, setState] = useState({
    email: "",
    pass: "",
  });
  const [error, setError] = useState({});

  const checkState = () => {
    const newError = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!state.email) {
      newError.email = "Enter your Email Id";
    } else if (!emailRegex.test(state.email)) {
      newError.email = "Enter a valid Email Id";
    }
    if (!state.pass) {
      newError.pass = "Enter a password";
    }
    return newError;
  };

  const handleSubmit = () => {
    const newErrors = checkState();
    if (Object.keys(newErrors).length !== 0) setError({ ...newErrors });
    else {
      if (Object.keys(error).length !== 0) setError({});
      console.log(state);
    }
  };
  return (
    <div className="bg-white/30 backdrop-blur-lg border-2 border-white/20 rounded-lg py-10 px-20 z-[10] flex flex-col gap-6 items-center">
      <div className="relative">
        <input
          type="text"
          value={state.email}
          onChange={(e) => setState({ ...state, email: e.target.value })}
          placeholder="Email"
          className="outline-none p-2 border-b-2 focus:border-green-400 text-2xl w-100"
        />
        <div className="absolute text-red-400 text-sm">{error.email}</div>
      </div>
      <div className="relative">
        <input
          type="password"
          value={state.pass}
          onChange={(e) => setState({ ...state, pass: e.target.value })}
          placeholder="Password"
          className="outline-none p-2 border-b-2 focus:border-green-400 text-2xl w-100"
        />
        <div className="absolute text-red-400 text-sm">{error.pass}</div>
      </div>
      <Button className="px-10 py-7 text-lg rounded-full text-center bg-green-500 text-white active:bg-green-700 hover:bg-green-600 cursor-pointer" onClick={handleSubmit}>
        Login
      </Button>
      <div className="text-lg">
        Don't have an account{" "}
        <span className="text-green-500 active:text-theme-color1 cursor-pointer underline" onClick={()=>setAuth("signup")}>
          Sign Up
        </span>
      </div>
      <div className="flex gap-8">
        <img src={google} alt="google Logo" className="cursor-pointer" />
        <img src={apple} alt="apple Logo" className="cursor-pointer" />
      </div>
    </div>
  );
};

export default LoginComponent;
