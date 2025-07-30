import React, { useEffect, useState } from "react";
import EyeGlass2 from "@/assets/EyeGlass2.jpg";
import Arrow from "@/assets/ArrowDown.png";
import upload from "@/assets/upload.png";
import save from "@/assets/save.png";
import fillout from "@/assets/fillout.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft } from "lucide-react";
// import Arrow from "@/assets/ArrowDown.png"

const ConfirmDetails = () => {
  const [state, setState] = useState({
    sph_od: undefined,
    sph_os: undefined,
    cyl_od: undefined,
    cyl_os: undefined,
    axis_od: undefined,
    axis_os: undefined,
    pd: undefined,
  });
  const [error, setError] = useState({
    sph_od: false,
    sph_os: false,
    cyl_od: false,
    cyl_os: false,
    axis_od: false,
    axis_os: false,
    pd: false,
  });
  const [check, setCheck] = useState({
    age: false,
    save: false,
  });
  // useEffect(() => {
  //   if (state.sph_od < -20) setState({ ...state, sph_od: -20 });
  //   else if (state.sph_od > 20) setState({ ...state, sph_od: 20 });
  // }, [state.sph_od]);

  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

  const change = ({ val, op, change, min, max }) => {
    let value, clamped;
    if (!op) value = Math.round(val * 100) / 100;
    else if (op == "+") value = Math.round((state[change] + val) * 100) / 100;
    else value = Math.round((state[change] - val) * 100) / 100;
    clamped = clamp(value, min, max);
    if (value != clamped) setError({ ...error, [change]: true });
    else if (error[change]) setError({ ...error, [change]: false });

    setState({ ...state, [change]: clamped });
    return;
  };

  const handleCheckbox = (checked, field) =>
    setCheck({ ...check, [field]: checked });

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-[70%] h-[75%] bg-white shadow-lg rounded-md relative flex gap-20 p-16 mt-[5%]">
        <ArrowLeft className="w-11 h-11 rounded-full text-green-600 absolute top-[2%] left-[1%] p-2 cursor-pointer hover:bg-green-200 active:bg-green-300" />
        <div className="w-[45%]">
          <img
            src={EyeGlass2}
            alt=""
            className="w-full h-[85%] border-3 rounded-xl"
          />
          <div className="flex justify-between mt-4">
            <div className="w-[40%]">
              <div className="text-3xl">Tecla</div>
              <div className="text-xl">Shipping & handling</div>
            </div>
            <div className="w-[40%] text-right">
              <div className="text-3xl">₹ 5000</div>
              <div className="text-xl">calculated at checkout</div>
            </div>
          </div>
        </div>
       
        <Button disabled={!check.save} className="absolute bottom-[3%] right-[3%] text-lg bg-green-500 hover:bg-green-600 active:bg-green-700 cursor-pointer px-8 py-6 rounded-full">Continue</Button>
      </div>
    </div>
  );
};

export default ConfirmDetails;
