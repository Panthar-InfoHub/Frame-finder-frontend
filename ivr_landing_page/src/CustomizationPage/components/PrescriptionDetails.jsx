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

const PrescriptionDetails = () => {
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
        <div className="flex-1 space-y-4">
          <div className="text-2xl text-center">
            Fill in your Prescription Details
          </div>
          <div className="grid grid-cols-4 w-full h-4/5 border-2 rounded-4xl overflow-hidden">
            <div className="col-start-2 text-2xl grid place-items-center border-1 border-l-2">
              SPH
            </div>
            <div className="text-2xl grid place-items-center border-1">CYL</div>
            <div className="text-2xl grid place-items-center border-1">
              Axis
            </div>
            <div className="text-xl flex items-center pl-3 border-1 border-t-2">
              OD <br /> Right Eye
            </div>
            <div className="relative flex items-center justify-center gap-1 border-1">
              {error.sph_od && (
                <div className="block absolute bottom-0 left-[12%] text-red-500 text-xs w-[85%]">
                  value must lie between -20 and 20
                </div>
              )}
              <input
                type="number"
                placeholder="Ex. 2.55"
                min="-20"
                max="20"
                value={state.sph_od}
                onChange={(e) =>
                  change({
                    val: Number(e.target.value),
                    change: "sph_od",
                    min: -20,
                    max: 20,
                  })
                }
                className="w-21 text-xl p-1 outline-none border rounded appearance-none  [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />

              <div className="h-10 flex flex-col justify-between">
                <div
                  onClick={() =>
                    change({
                      val: 0.01,
                      op: "+",
                      change: "sph_od",
                      min: -20,
                      max: 20,
                    })
                  }
                  className="text-sm p-1 leading-none w-6 h-4 hover:bg-blue-100 rounded-t cursor-pointer"
                >
                  <img src={Arrow} className="rotate-180" />
                </div>
                <div
                  onClick={() =>
                    change({
                      val: 0.01,
                      op: "-",
                      change: "sph_od",
                      min: -20,
                      max: 20,
                    })
                  }
                  className="text-sm  p-1 leading-none w-6 h-4 hover:bg-blue-100 rounded-b cursor-pointer"
                >
                  <img src={Arrow} className="" />
                </div>
              </div>
            </div>
            <div className="relative flex items-center justify-center gap-1 border-1">
              {error.cyl_od && (
                <div className="block absolute bottom-0 left-[12%] text-red-500 text-xs w-[85%]">
                  value must lie between -6 and 6
                </div>
              )}

              <input
                type="number"
                placeholder="Ex. 2.55"
                min="-6"
                max="6"
                value={state.cyl_od}
                onChange={(e) =>
                  change({
                    val: Number(e.target.value),
                    change: "cyl_od",
                    min: -6,
                    max: 6,
                  })
                }
                className="w-21 text-xl p-1 outline-none border rounded appearance-none  [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />

              <div className="h-10 flex flex-col justify-between">
                <div
                  onClick={() =>
                    change({
                      val: 0.01,
                      op: "+",
                      change: "cyl_od",
                      min: -6,
                      max: 6,
                    })
                  }
                  className="text-sm p-1 leading-none w-6 h-4 hover:bg-blue-100 rounded-t cursor-pointer"
                >
                  <img src={Arrow} className="rotate-180" />
                </div>
                <div
                  onClick={() =>
                    change({
                      val: 0.01,
                      op: "-",
                      change: "cyl_od",
                      min: -6,
                      max: 6,
                    })
                  }
                  className="text-sm  p-1 leading-none w-6 h-4 hover:bg-blue-100 rounded-b cursor-pointer"
                >
                  <img src={Arrow} className="" />
                </div>
              </div>
            </div>
            <div className="relative flex items-center justify-center gap-1 border-1">
              {error.axis_od && (
                <div className="block absolute bottom-0 left-[12%] text-red-500 text-xs w-[85%]">
                  value must lie between 0 and 180
                </div>
              )}

              <input
                type="number"
                placeholder="Ex. 50"
                min="0"
                max="180"
                value={state.axis_od}
                onChange={(e) =>
                  change({
                    val: Number(e.target.value),
                    change: "axis_od",
                    min: 0,
                    max: 180,
                  })
                }
                className="w-21 text-xl p-1 outline-none border rounded appearance-none  [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />

              <div className="h-10 flex flex-col justify-between">
                <div
                  onClick={() =>
                    change({
                      val: 1,
                      op: "+",
                      change: "axis_od",
                      min: 0,
                      max: 180,
                    })
                  }
                  className="text-sm p-1 leading-none w-6 h-4 hover:bg-blue-100 rounded-t cursor-pointer"
                >
                  <img src={Arrow} className="rotate-180" />
                </div>
                <div
                  onClick={() =>
                    change({
                      val: 1,
                      op: "-",
                      change: "axis_od",
                      min: 0,
                      max: 180,
                    })
                  }
                  className="text-sm  p-1 leading-none w-6 h-4 hover:bg-blue-100 rounded-b cursor-pointer"
                >
                  <img src={Arrow} className="" />
                </div>
              </div>
            </div>
            <div className="text-xl flex items-center pl-3 border-1">
              OS <br /> Left Eye
            </div>
            <div className="relative flex items-center justify-center gap-1 border-1">
              {error.sph_os && (
                <div className="block absolute bottom-0 left-[12%] text-red-500 text-xs w-[85%]">
                  value must lie between -20 and 20
                </div>
              )}
              <input
                type="number"
                placeholder="Ex. 2.55"
                min="-20"
                max="20"
                value={state.sph_os}
                onChange={(e) =>
                  change({
                    val: Number(e.target.value),
                    change: "sph_os",
                    min: -20,
                    max: 20,
                  })
                }
                className="w-21 text-xl p-1 outline-none border rounded appearance-none  [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />

              <div className="h-10 flex flex-col justify-between">
                <div
                  onClick={() =>
                    change({
                      val: 0.01,
                      op: "+",
                      change: "sph_os",
                      min: -20,
                      max: 20,
                    })
                  }
                  className="text-sm p-1 leading-none w-6 h-4 hover:bg-blue-100 rounded-t cursor-pointer"
                >
                  <img src={Arrow} className="rotate-180" />
                </div>
                <div
                  onClick={() =>
                    change({
                      val: 0.01,
                      op: "-",
                      change: "sph_os",
                      min: -20,
                      max: 20,
                    })
                  }
                  className="text-sm  p-1 leading-none w-6 h-4 hover:bg-blue-100 rounded-b cursor-pointer"
                >
                  <img src={Arrow} className="" />
                </div>
              </div>
            </div>
            <div className="relative flex items-center justify-center gap-1 border-1">
              {error.cyl_os && (
                <div className="block absolute bottom-0 left-[12%] text-red-500 text-xs w-[85%]">
                  value must lie between -6 and 6
                </div>
              )}

              <input
                type="number"
                placeholder="Ex. 2.55"
                min="-6"
                max="6"
                value={state.cyl_os}
                onChange={(e) =>
                  change({
                    val: Number(e.target.value),
                    change: "cyl_os",
                    min: -6,
                    max: 6,
                  })
                }
                className="w-21 text-xl p-1 outline-none border rounded appearance-none  [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />

              <div className="h-10 flex flex-col justify-between">
                <div
                  onClick={() =>
                    change({
                      val: 0.01,
                      op: "+",
                      change: "cyl_os",
                      min: -6,
                      max: 6,
                    })
                  }
                  className="text-sm p-1 leading-none w-6 h-4 hover:bg-blue-100 rounded-t cursor-pointer"
                >
                  <img src={Arrow} className="rotate-180" />
                </div>
                <div
                  onClick={() =>
                    change({
                      val: 0.01,
                      op: "-",
                      change: "cyl_os",
                      min: -6,
                      max: 6,
                    })
                  }
                  className="text-sm  p-1 leading-none w-6 h-4 hover:bg-blue-100 rounded-b cursor-pointer"
                >
                  <img src={Arrow} className="" />
                </div>
              </div>
            </div>
            <div className="relative flex items-center justify-center gap-1 border-1">
              {error.axis_os && (
                <div className="block absolute bottom-0 left-[12%] text-red-500 text-xs w-[85%]">
                  value must lie between 0 and 180
                </div>
              )}

              <input
                type="number"
                placeholder="Ex. 50"
                min="0"
                max="180"
                value={state.axis_os}
                onChange={(e) =>
                  change({
                    val: Number(e.target.value),
                    change: "axis_os",
                    min: 0,
                    max: 180,
                  })
                }
                className="w-21 text-xl p-1 outline-none border rounded appearance-none  [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />

              <div className="h-10 flex flex-col justify-between">
                <div
                  onClick={() =>
                    change({
                      val: 1,
                      op: "+",
                      change: "axis_os",
                      min: 0,
                      max: 180,
                    })
                  }
                  className="text-sm p-1 leading-none w-6 h-4 hover:bg-blue-100 rounded-t cursor-pointer"
                >
                  <img src={Arrow} className="rotate-180" />
                </div>
                <div
                  onClick={() =>
                    change({
                      val: 1,
                      op: "-",
                      change: "axis_os",
                      min: 0,
                      max: 180,
                    })
                  }
                  className="text-sm  p-1 leading-none w-6 h-4 hover:bg-blue-100 rounded-b cursor-pointer"
                >
                  <img src={Arrow} className="" />
                </div>
              </div>
            </div>
            <div className="text-xl flex items-center pl-3 border-1">
              PD <br /> Pupillary Distance
            </div>
            <div className="relative col-span-3 px-2 flex items-center justify-center gap-1 border-1">
              {error.pd && (
                <div className="block absolute bottom-[23%] left-[2%] text-red-500 text-xs w-[85%]">
                  value must lie between 0 and 80
                </div>
              )}

              {/* <div className="w-4/5"> */}
              <input
                type="number"
                placeholder="Enter your pupillary distance Ex. 50"
                min="0"
                max="80"
                value={state.pd}
                onChange={(e) =>
                  change({
                    val: Number(e.target.value),
                    change: "pd",
                    min: 0,
                    max: 80,
                  })
                }
                className="flex-1 text-xl p-1 outline-none border rounded appearance-none  [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />

              {/* </div> */}
              <div className="h-10 flex flex-col justify-between">
                <div
                  onClick={() =>
                    change({
                      val: 1,
                      op: "+",
                      change: "pd",
                      min: 0,
                      max: 80,
                    })
                  }
                  className="text-sm p-1 leading-none w-6 h-4 hover:bg-blue-100 rounded-t cursor-pointer"
                >
                  <img src={Arrow} className="rotate-180" />
                </div>
                <div
                  onClick={() =>
                    change({
                      val: 1,
                      op: "-",
                      change: "pd",
                      min: 0,
                      max: 80,
                    })
                  }
                  className="text-sm  p-1 leading-none w-6 h-4 hover:bg-blue-100 rounded-b cursor-pointer"
                >
                  <img src={Arrow} className="" />
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <label
              htmlFor="age"
              className="flex items-center gap-2 cursor-pointer"
            >
              <Checkbox
                id="age"
                onCheckedChange={(checked) => handleCheckbox(checked, "age")}
                className="cursor-pointer data-[state=checked]:bg-theme-color1 data-[state=checked]:border-theme-color1"
              />
              Wearer is under 18 years old
            </label>
            <label
              htmlFor="save"
              className="flex items-center gap-2 cursor-pointer"
            >
              <Checkbox
                id="save"
                onCheckedChange={(checked) => handleCheckbox(checked, "save")}
                className="cursor-pointer data-[state=checked]:bg-theme-color1 data-[state=checked]:border-theme-color1"
              />
              Save this prescription
            </label>
          </div>
        </div>
        <Button disabled={!check.save} className="absolute bottom-[3%] right-[3%] text-lg bg-green-500 hover:bg-green-600 active:bg-green-700 cursor-pointer px-8 py-6 rounded-full">Continue</Button>
      </div>
    </div>
  );
};

export default PrescriptionDetails;
