import personalInfoStore from "@/stores/PersonalInfoStore";
import React, { useEffect, useRef, useState } from "react";
import Arrow from "@/assets/ArrowDown.png";
import { Checkbox } from "@/components/ui/checkbox";

const SunGlassPrescription = ({ setSave }) => {
  const { sunGlassPrescription, setSunGlassPrescription } = personalInfoStore();
  const [state, setState] = useState(sunGlassPrescription);
  const [error, setError] = useState({});
  const first = useRef(true);
  useEffect(() => {
    const obj = {};
    for (let key in state) obj[key] = false;
    setError(obj);
  }, []);
  useEffect(() => {
    setSave(state.save)
    if (first.current) {
      first.current = false;
      return;
    }
    if (state.save && Object.keys(error).length !== 0) setError(false);

    setSunGlassPrescription(state);
  }, [state.save]);
  useEffect(() => {
    console.log("sunGlassPrescription", sunGlassPrescription);
  }, [sunGlassPrescription]);

  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

  const change = ({ val, op, key, min, max }) => {
    let value, clamped;
    if (key == "age") clamped = val;
    else {
      if (!op) value = Math.round(val * 100) / 100;
      else if (op == "+") value = Math.round((state[key] + val) * 100) / 100;
      else value = Math.round((state[key] - val) * 100) / 100;
      clamped = clamp(value, min, max);
      if (value != clamped) setError({ ...error, [key]: true });
      else if (error[key]) setError({ ...error, [key]: false });
    }

    const newState = { ...state, [key]: clamped };
    if (state.save) newState.save = false;

    setState(newState);
    return;
  };

  return (
    <>
      <div className="max-w-[700px] min-w-[350px] mx-auto h-[70%] max-[1300px]:h-[350px] w-full grid grid-cols-4 border-2 rounded-4xl overflow-hidden">
        <div className="col-start-2 min-[1300px]:text-xl grid place-items-center border-1 border-l-2">
          SPH
        </div>
        <div className="min-[1300px]:text-xl grid place-items-center border-1">
          CYL
        </div>
        <div className="min-[1300px]:text-xl grid place-items-center border-1">
          Axis
        </div>
        <div className="min-[1300px]:text-xl flex items-center px-3 border-1 border-t-2">
          OD <br /> Right Eye
        </div>
        <div className="relative flex items-center justify-center gap-1 border-1">
          {error.sph_od && (
            <div className="block absolute bottom-0 left-[12%] text-red-500 text-xs w-[85%]">
              value must lie between -20 and 20
            </div>
          )}
          <div className="flex items-center justify-center gap-1 w-4/5 h-[35%] min-h-[25px] max-h-[55px]">
            <input
              type="number"
              placeholder="Ex. 2.55"
              min="-20"
              max="20"
              value={state.sph_od}
              onChange={(e) =>
                change({
                  val: Number(e.target.value),
                  key: "sph_od",
                  min: -20,
                  max: 20,
                })
              }
              className="flex-[4] h-full text-xl p-1 outline-none border-b-3 focus:border-b-green-300 appearance-none  [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />

            <div className="h-full flex-[1] max-[1000px]:hidden flex flex-col justify-between items-center">
              <div
                onClick={() =>
                  change({
                    val: 0.01,
                    op: "+",
                    key: "sph_od",
                    min: -20,
                    max: 20,
                  })
                }
                className="w-full h-[45%] min-h-[9px] p-[15%] leading-none hover:bg-blue-100 rounded-t cursor-pointer"
              >
                <img src={Arrow} className="rotate-180 w-full h-full" />
              </div>
              <div
                onClick={() =>
                  change({
                    val: 0.01,
                    op: "-",
                    key: "sph_od",
                    min: -20,
                    max: 20,
                  })
                }
                className="w-full h-[45%] min-h-[9px] p-[15%] leading-none hover:bg-blue-100 rounded-b cursor-pointer"
              >
                <img src={Arrow} className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-center gap-1 border-1">
          {error.cyl_od && (
            <div className="block absolute bottom-0 left-[12%] text-red-500 text-xs w-[85%]">
              value must lie between -6 and 6
            </div>
          )}

          <div className="flex items-center justify-center gap-1 w-4/5 h-[35%] min-h-[25px] max-h-[55px]">
            <input
              type="number"
              placeholder="Ex. 2.55"
              min="-6"
              max="6"
              value={state.cyl_od}
              onChange={(e) =>
                change({
                  val: Number(e.target.value),
                  key: "cyl_od",
                  min: -6,
                  max: 6,
                })
              }
              className="flex-[4] h-full  text-xl p-1 outline-none border-b-3 focus:border-b-green-300  appearance-none  [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />

            <div className="h-full flex-[1] max-[1000px]:hidden flex flex-col justify-between items-center">
              <div
                onClick={() =>
                  change({
                    val: 0.01,
                    op: "+",
                    key: "cyl_od",
                    min: -6,
                    max: 6,
                  })
                }
                className="w-full h-[45%] min-h-[9px] p-[15%] leading-none hover:bg-blue-100 rounded-t cursor-pointer"
              >
                <img src={Arrow} className="rotate-180 w-full h-full" />
              </div>
              <div
                onClick={() =>
                  change({
                    val: 0.01,
                    op: "-",
                    key: "cyl_od",
                    min: -6,
                    max: 6,
                  })
                }
                className="w-full h-[45%] min-h-[9px] p-[15%] leading-none hover:bg-blue-100 rounded-b cursor-pointer"
              >
                <img src={Arrow} className="w-full h-full" />
              </div>
            </div>
          </div>

          {/* <input
            type="number"
            placeholder="Ex. 2.55"
            min="-6"
            max="6"
            value={state.cyl_od}
            onChange={(e) =>
              change({
                val: Number(e.target.value),
                key: "cyl_od",
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
                  key: "cyl_od",
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
                  key: "cyl_od",
                  min: -6,
                  max: 6,
                })
              }
              className="text-sm  p-1 leading-none w-6 h-4 hover:bg-blue-100 rounded-b cursor-pointer"
            >
              <img src={Arrow} className="" />
            </div>
          </div> */}
        </div>
        <div className="relative flex items-center justify-center gap-1 border-1">
          {error.axis_od && (
            <div className="block absolute bottom-0 left-[12%] text-red-500 text-xs w-[85%]">
              value must lie between 0 and 180
            </div>
          )}

          <div className="flex items-center justify-center gap-1 w-4/5 h-[35%] min-h-[25px] max-h-[55px]">
            <input
              type="number"
              placeholder="Ex. 50"
              min="0"
              max="180"
              value={state.axis_od}
              onChange={(e) =>
                change({
                  val: Number(e.target.value),
                  key: "axis_od",
                  min: 0,
                  max: 180,
                })
              }
              className="flex-[4] h-full  text-xl p-1 outline-none border-b-3 focus:border-b-green-300 appearance-none  [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />

            <div className="h-full flex-[1] max-[1000px]:hidden flex flex-col justify-between items-center">
              <div
                onClick={() =>
                  change({
                    val: 1,
                    op: "+",
                    key: "axis_od",
                    min: 0,
                    max: 180,
                  })
                }
                className="w-full h-[45%] min-h-[9px] p-[15%] leading-none hover:bg-blue-100 rounded-t cursor-pointer"
              >
                <img src={Arrow} className="rotate-180 w-full h-full" />
              </div>
              <div
                onClick={() =>
                  change({
                    val: 1,
                    op: "-",
                    key: "axis_od",
                    min: 0,
                    max: 180,
                  })
                }
                className="w-full h-[45%] min-h-[9px] p-[15%] leading-none hover:bg-blue-100 rounded-b cursor-pointer"
              >
                <img src={Arrow} className="w-full h-full" />
              </div>
            </div>
          </div>

          {/* <input
            type="number"
            placeholder="Ex. 50"
            min="0"
            max="180"
            value={state.axis_od}
            onChange={(e) =>
              change({
                val: Number(e.target.value),
                key: "axis_od",
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
                  key: "axis_od",
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
                  key: "axis_od",
                  min: 0,
                  max: 180,
                })
              }
              className="text-sm  p-1 leading-none w-6 h-4 hover:bg-blue-100 rounded-b cursor-pointer"
            >
              <img src={Arrow} className="" />
            </div>
          </div> */}
        </div>
        <div className="min-[1300px]:text-xl flex items-center px-3 border-1">
          OS <br /> Left Eye
        </div>
        <div className="relative flex items-center justify-center gap-1 border-1">
          {error.sph_os && (
            <div className="block absolute bottom-0 left-[12%] text-red-500 text-xs w-[85%]">
              value must lie between -20 and 20
            </div>
          )}

          <div className="flex items-center justify-center gap-1 w-4/5 h-[35%] min-h-[25px] max-h-[55px]">
            <input
              type="number"
              placeholder="Ex. 2.55"
              min="-20"
              max="20"
              value={state.sph_os}
              onChange={(e) =>
                change({
                  val: Number(e.target.value),
                  key: "sph_os",
                  min: -20,
                  max: 20,
                })
              }
              className="flex-[4] h-full  text-xl p-1 outline-none border-b-3 focus:border-b-green-300 appearance-none  [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />

            <div className="h-full flex-[1] max-[1000px]:hidden flex flex-col justify-between items-center">
              <div
                onClick={() =>
                  change({
                    val: 0.01,
                    op: "+",
                    key: "sph_os",
                    min: -20,
                    max: 20,
                  })
                }
                className="max-[1000px]:w-3 max-[1000px]:h-3 w-full h-[45%] min-h-[9px] p-[15%] leading-none hover:bg-blue-100 rounded-t cursor-pointer"
              >
                <img src={Arrow} className="rotate-180 w-full h-full" />
              </div>
              <div
                onClick={() =>
                  change({
                    val: 0.01,
                    op: "-",
                    key: "sph_os",
                    min: -20,
                    max: 20,
                  })
                }
                className="max-[1000px]:w-3 max-[1000px]:h-3 w-full h-[45%] min-h-[9px] p-[15%] leading-none hover:bg-blue-100 rounded-b cursor-pointer"
              >
                <img src={Arrow} className="w-full h-full" />
              </div>
            </div>
          </div>

          {/* <input
            type="number"
            placeholder="Ex. 2.55"
            min="-20"
            max="20"
            value={state.sph_os}
            onChange={(e) =>
              change({
                val: Number(e.target.value),
                key: "sph_os",
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
                  key: "sph_os",
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
                  key: "sph_os",
                  min: -20,
                  max: 20,
                })
              }
              className="text-sm  p-1 leading-none w-6 h-4 hover:bg-blue-100 rounded-b cursor-pointer"
            >
              <img src={Arrow} className="" />
            </div>
          </div> */}
        </div>
        <div className="relative flex items-center justify-center gap-1 border-1">
          {error.cyl_os && (
            <div className="block absolute bottom-0 left-[12%] text-red-500 text-xs w-[85%]">
              value must lie between -6 and 6
            </div>
          )}

          <div className="flex items-center justify-center gap-1 w-4/5 h-[35%] min-h-[25px] max-h-[55px]">
            <input
              type="number"
              placeholder="Ex. 2.55"
              min="-6"
              max="6"
              value={state.cyl_os}
              onChange={(e) =>
                change({
                  val: Number(e.target.value),
                  key: "cyl_os",
                  min: -6,
                  max: 6,
                })
              }
              className="flex-[4] h-full  text-xl p-1 outline-none border-b-3 focus:border-b-green-300 appearance-none  [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />

            <div className="h-full flex-[1] max-[1000px]:hidden flex flex-col justify-between items-center">
              <div
                onClick={() =>
                  change({
                    val: 0.01,
                    op: "+",
                    key: "cyl_os",
                    min: -6,
                    max: 6,
                  })
                }
                className="w-full h-[45%] min-h-[9px] p-[15%] leading-none hover:bg-blue-100 rounded-t cursor-pointer"
              >
                <img src={Arrow} className="rotate-180 w-full h-full" />
              </div>
              <div
                onClick={() =>
                  change({
                    val: 0.01,
                    op: "-",
                    key: "cyl_os",
                    min: -6,
                    max: 6,
                  })
                }
                className="w-full h-[45%] min-h-[9px] p-[15%] leading-none hover:bg-blue-100 rounded-b cursor-pointer"
              >
                <img src={Arrow} className="w-full h-full" />
              </div>
            </div>
          </div>

          {/* <input
            type="number"
            placeholder="Ex. 2.55"
            min="-6"
            max="6"
            value={state.cyl_os}
            onChange={(e) =>
              change({
                val: Number(e.target.value),
                key: "cyl_os",
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
                  key: "cyl_os",
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
                  key: "cyl_os",
                  min: -6,
                  max: 6,
                })
              }
              className="text-sm  p-1 leading-none w-6 h-4 hover:bg-blue-100 rounded-b cursor-pointer"
            >
              <img src={Arrow} className="" />
            </div>
          </div> */}
        </div>
        <div className="relative flex items-center justify-center gap-1 border-1">
          {error.axis_os && (
            <div className="block absolute bottom-0 left-[12%] text-red-500 text-xs w-[85%]">
              value must lie between 0 and 180
            </div>
          )}

          <div className="flex items-center justify-center gap-1 w-4/5 h-[35%] min-h-[25px] max-h-[55px]">
            <input
              type="number"
              placeholder="Ex. 50"
              min="0"
              max="180"
              value={state.axis_os}
              onChange={(e) =>
                change({
                  val: Number(e.target.value),
                  key: "axis_os",
                  min: 0,
                  max: 180,
                })
              }
              className="flex-[4] h-full  text-xl p-1 outline-none border-b-3 focus:border-b-green-300 appearance-none  [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />

            <div className="h-full flex-[1] max-[1000px]:hidden flex flex-col justify-between items-center">
              <div
                onClick={() =>
                  change({
                    val: 1,
                    op: "+",
                    key: "axis_os",
                    min: 0,
                    max: 180,
                  })
                }
                className="w-full h-[45%] min-h-[9px] p-[15%] leading-none hover:bg-blue-100 rounded-t cursor-pointer"
              >
                <img src={Arrow} className="rotate-180 w-full h-full" />
              </div>
              <div
                onClick={() =>
                  change({
                    val: 1,
                    op: "-",
                    key: "axis_os",
                    min: 0,
                    max: 180,
                  })
                }
                className="w-full h-[45%] min-h-[9px] p-[15%] leading-none hover:bg-blue-100 rounded-b cursor-pointer"
              >
                <img src={Arrow} className="w-full h-full" />
              </div>
            </div>
          </div>

          {/* <input
            type="number"
            placeholder="Ex. 50"
            min="0"
            max="180"
            value={state.axis_os}
            onChange={(e) =>
              change({
                val: Number(e.target.value),
                key: "axis_os",
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
                  key: "axis_os",
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
                  key: "axis_os",
                  min: 0,
                  max: 180,
                })
              }
              className="text-sm  p-1 leading-none w-6 h-4 hover:bg-blue-100 rounded-b cursor-pointer"
            >
              <img src={Arrow} className="" />
            </div>
          </div> */}
        </div>
        <div className="min-[1300px]:text-xl flex items-center px-3 border-1">
          PD <br /> Pupillary Distance
        </div>
        <div className="relative col-span-3 px-2 flex items-center justify-center gap-1 border-1">
          {error.pd && (
            <div className="block absolute bottom-[23%] left-[2%] text-red-500 text-xs w-[85%]">
              value must lie between 0 and 80
            </div>
          )}

          <div className="flex items-center justify-center gap-1 w-4/5 h-[35%] min-h-[25px] max-h-[55px]">
            <input
              type="number"
              placeholder="Enter your pupillary distance Ex. 50"
              min="0"
              max="80"
              value={state.pd}
              onChange={(e) =>
                change({
                  val: Number(e.target.value),
                  key: "pd",
                  min: 0,
                  max: 80,
                })
              }
              className="h-full w-[100%] text-xl p-1 outline-none border-b-3 focus:border-b-green-300 appearance-none  [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />

            <div className="h-full flex flex-col max-[1000px]:hidden justify-between items-center">
              <div
                onClick={() =>
                  change({
                    val: 1,
                    op: "+",
                    key: "pd",
                    min: 0,
                    max: 80,
                  })
                }
                className="w-4/5 h-[45%] min-h-[9px] p-[15%] leading-none hover:bg-blue-100 rounded-t cursor-pointer"
              >
                <img src={Arrow} className="rotate-180 w-full h-full" />
              </div>
              <div
                onClick={() =>
                  change({
                    val: 1,
                    op: "-",
                    key: "pd",
                    min: 0,
                    max: 80,
                  })
                }
                className="w-4/5 h-[45%] min-h-[9px] p-[15%] leading-none hover:bg-blue-100 rounded-b cursor-pointer"
              >
                <img src={Arrow} className="w-full h-full" />
              </div>
            </div>
          </div>

          {/* <input
            type="number"
            placeholder="Enter your pupillary distance Ex. 50"
            min="0"
            max="80"
            value={state.pd}
            onChange={(e) =>
              change({
                val: Number(e.target.value),
                key: "pd",
                min: 0,
                max: 80,
              })
            }
            className="flex-1 text-xl p-1 outline-none border rounded appearance-none  [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />

          <div className="h-10 flex flex-col justify-between">
            <div
              onClick={() =>
                change({
                  val: 1,
                  op: "+",
                  key: "pd",
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
                  key: "pd",
                  min: 0,
                  max: 80,
                })
              }
              className="text-sm  p-1 leading-none w-6 h-4 hover:bg-blue-100 rounded-b cursor-pointer"
            >
              <img src={Arrow} className="" />
            </div>
          </div> */}
        </div>
      </div>
      <div className="w-full max-w-[700px] min-w-[350px] mx-auto mt-5 space-y-2">
        <label htmlFor="age" className="flex items-center gap-2 cursor-pointer">
          <Checkbox
            id="age"
            checked={state.age}
            onCheckedChange={(checked) => change({ val: checked, key: "age" })}
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
            checked={state.save}
            onCheckedChange={(checked) => setState({ ...state, save: checked })}
            className="cursor-pointer data-[state=checked]:bg-theme-color1 data-[state=checked]:border-theme-color1"
          />
          Save this prescription
        </label>
      </div>
    </>
  );
};

export default SunGlassPrescription;
