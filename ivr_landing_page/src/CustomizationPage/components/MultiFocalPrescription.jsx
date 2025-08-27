import personalInfoStore from "@/stores/PersonalInfoStore";
import React, { useEffect, useRef, useState } from "react";
import Arrow from "@/assets/ArrowDown.png";
import { Checkbox } from "@/components/ui/checkbox";

const MultiFocalPrescription = ({ save, setSave }) => {
  const { multiFocalPrescription, setMultiFocalPrescription } =
    personalInfoStore();
  const [state, setState] = useState(multiFocalPrescription);
  const [error, setError] = useState({});
  const inputRef = useRef(null);
  useEffect(() => {
    const obj = {};
    for (let key in state) obj[key] = false;
    setError(obj);
  }, []);
  useEffect(() => {
    if (save) {
      if (Object.keys(error).length !== 0) setError(false);
      setMultiFocalPrescription(state);
    }
  }, [save]);
  useEffect(() => {
    console.log("multiFocalPrescription", multiFocalPrescription);
  }, [multiFocalPrescription]);

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
    if (save) setSave(false);
    setState(newState);
    return;
  };

  const handleInput = () => inputRef.current.click();

  return (
    <>
      <div className="max-w-[700px] min-w-[350px] mx-auto h-[70%] max-[1300px]:h-[350px] w-full grid grid-cols-3 border-2 rounded-4xl overflow-hidden">
        <div className="col-start-2 min-[1300px]:text-xl grid place-items-center border-1 border-l-2">
          OD Right Eye
        </div>
        <div className="min-[1300px]:text-xl grid place-items-center border-1">
          OS Left Eye
        </div>
        <div className="min-[1300px]:text-xl flex items-center px-3 border-1 border-t-2">
          Spherical
        </div>
        <div className="relative flex items-center justify-center gap-1 border-1">
          {error.sph_od && (
            <div className="block absolute bottom-[1px] left-1 text-red-500 text-[11px]">
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

            <div className="h-10 flex flex-col justify-between">
              <div
                onClick={() =>
                  change({
                    val: 0.25,
                    op: "+",
                    key: "sph_od",
                    min: -20,
                    max: 20,
                  })
                }
                className="w-full h-[45%] min-h-[9px] p-[15%] leading-none hover:bg-blue-100 rounded-t cursor-pointer"
              >
                <img src={Arrow} className="rotate-180" />
              </div>
              <div
                onClick={() =>
                  change({
                    val: 0.25,
                    op: "-",
                    key: "sph_od",
                    min: -20,
                    max: 20,
                  })
                }
                className="w-full h-[45%] min-h-[9px] p-[15%] leading-none hover:bg-blue-100 rounded-b cursor-pointer"
              >
                <img src={Arrow} className="" />
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-center gap-1 border-1">
          {error.sph_os && (
            <div className="block absolute bottom-[1px] left-1 text-red-500 text-[11px]">
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
              className="flex-[4] h-full text-xl p-1 outline-none border-b-3 focus:border-b-green-300 appearance-none  [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />

            <div className="h-10 flex flex-col justify-between">
              <div
                onClick={() =>
                  change({
                    val: 0.25,
                    op: "+",
                    key: "sph_os",
                    min: -20,
                    max: 20,
                  })
                }
                className="w-full h-[45%] min-h-[9px] p-[15%] leading-none hover:bg-blue-100 rounded-t cursor-pointer"
              >
                <img src={Arrow} className="rotate-180" />
              </div>
              <div
                onClick={() =>
                  change({
                    val: 0.25,
                    op: "-",
                    key: "sph_os",
                    min: -20,
                    max: 20,
                  })
                }
                className="w-full h-[45%] min-h-[9px] p-[15%] leading-none hover:bg-blue-100 rounded-b cursor-pointer"
              >
                <img src={Arrow} className="" />
              </div>
            </div>
          </div>
        </div>
        <div className="min-[1300px]:text-xl flex items-center px-3 border-1">
          Add Power
        </div>
        <div className="relative flex items-center justify-center gap-1 border-1">
          {error.power_od && (
            <div className="block absolute bottom-[1px] left-1 text-red-500 text-[11px]">
              value must lie between -20 and 20
            </div>
          )}
          <div className="flex items-center justify-center gap-1 w-4/5 h-[35%] min-h-[25px] max-h-[55px]">
            <input
              type="number"
              placeholder="Ex. 2.55"
              min="-20"
              max="20"
              value={state.power_od}
              onChange={(e) =>
                change({
                  val: Number(e.target.value),
                  key: "power_od",
                  min: -20,
                  max: 20,
                })
              }
              className="flex-[4] h-full text-xl p-1 outline-none border-b-3 focus:border-b-green-300 appearance-none  [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />

            <div className="h-10 flex flex-col justify-between">
              <div
                onClick={() =>
                  change({
                    val: 0.25,
                    op: "+",
                    key: "power_od",
                    min: -20,
                    max: 20,
                  })
                }
                className="w-full h-[45%] min-h-[9px] p-[15%] leading-none hover:bg-blue-100 rounded-t cursor-pointer"
              >
                <img src={Arrow} className="rotate-180" />
              </div>
              <div
                onClick={() =>
                  change({
                    val: 0.25,
                    op: "-",
                    key: "power_od",
                    min: -20,
                    max: 20,
                  })
                }
                className="w-full h-[45%] min-h-[9px] p-[15%] leading-none hover:bg-blue-100 rounded-b cursor-pointer"
              >
                <img src={Arrow} className="" />
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-center gap-1 border-1">
          {error.power_os && (
            <div className="block absolute bottom-[1px] left-1 text-red-500 text-[11px]">
              value must lie between -20 and 20
            </div>
          )}
          <div className="flex items-center justify-center gap-1 w-4/5 h-[35%] min-h-[25px] max-h-[55px]">
            <input
              type="number"
              placeholder="Ex. 2.55"
              min="-20"
              max="20"
              value={state.power_os}
              onChange={(e) =>
                change({
                  val: Number(e.target.value),
                  key: "power_os",
                  min: -20,
                  max: 20,
                })
              }
              className="flex-[4] h-full text-xl p-1 outline-none border-b-3 focus:border-b-green-300 appearance-none  [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />

            <div className="h-10 flex flex-col justify-between">
              <div
                onClick={() =>
                  change({
                    val: 0.25,
                    op: "+",
                    key: "power_os",
                    min: -20,
                    max: 20,
                  })
                }
                className="w-full h-[45%] min-h-[9px] p-[15%] leading-none hover:bg-blue-100 rounded-t cursor-pointer"
              >
                <img src={Arrow} className="rotate-180" />
              </div>
              <div
                onClick={() =>
                  change({
                    val: 0.25,
                    op: "-",
                    key: "power_os",
                    min: -20,
                    max: 20,
                  })
                }
                className="w-full h-[45%] min-h-[9px] p-[15%] leading-none hover:bg-blue-100 rounded-b cursor-pointer"
              >
                <img src={Arrow} className="" />
              </div>
            </div>
          </div>
        </div>
        <div className="min-[1300px]:text-xl flex items-center px-3 border-1">
          No. of box
        </div>
        <div className="relative flex items-center justify-center gap-1 border-1">
          {error.box_od && (
            <div className="block absolute bottom-1 left-2 text-red-500 text-[11px]">
              value must lie between 1 and 10
            </div>
          )}
          <div className="flex items-center justify-center gap-1 w-4/5 h-[35%] min-h-[25px] max-h-[55px]">
            <input
              type="number"
              placeholder="Enter your pupillary distance Ex. 50"
              min="1"
              max="10"
              value={state.box_od}
              onChange={(e) =>
                change({
                  val: Number(e.target.value),
                  key: "box_od",
                  min: 1,
                  max: 10,
                })
              }
              className="flex-[4] h-full text-xl p-1 outline-none border-b-3 focus:border-b-green-300 appearance-none  [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />

            {/* </div> */}
            <div className="h-10 flex flex-col justify-between">
              <div
                onClick={() =>
                  change({
                    val: 1,
                    op: "+",
                    key: "box_od",
                    min: 1,
                    max: 10,
                  })
                }
                className="w-full h-[45%] min-h-[9px] p-[15%] leading-none hover:bg-blue-100 rounded-t cursor-pointer"
              >
                <img src={Arrow} className="rotate-180" />
              </div>
              <div
                onClick={() =>
                  change({
                    val: 1,
                    op: "-",
                    key: "box_od",
                    min: 1,
                    max: 10,
                  })
                }
                className="w-full h-[45%] min-h-[9px] p-[15%] leading-none hover:bg-blue-100 rounded-b cursor-pointer"
              >
                <img src={Arrow} className="" />
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-center gap-1 border-1">
          {error.box_os && (
            <div className="block absolute bottom-1 left-2 text-red-500 text-[11px]">
              value must lie between 1 and 10
            </div>
          )}
          <div className="flex items-center justify-center gap-1 w-4/5 h-[35%] min-h-[25px] max-h-[55px]">
            <input
              type="number"
              placeholder="Enter your pupillary distance Ex. 50"
              min="1"
              max="10"
              value={state.box_os}
              onChange={(e) =>
                change({
                  val: Number(e.target.value),
                  key: "box_os",
                  min: 1,
                  max: 10,
                })
              }
              className="flex-[4] h-full text-xl p-1 outline-none border-b-3 focus:border-b-green-300 appearance-none  [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />

            {/* </div> */}
            <div className="h-10 flex flex-col justify-between">
              <div
                onClick={() =>
                  change({
                    val: 1,
                    op: "+",
                    key: "box_os",
                    min: 1,
                    max: 10,
                  })
                }
                className="w-full h-[45%] min-h-[9px] p-[15%] leading-none hover:bg-blue-100 rounded-t cursor-pointer"
              >
                <img src={Arrow} className="rotate-180" />
              </div>
              <div
                onClick={() =>
                  change({
                    val: 1,
                    op: "-",
                    key: "box_os",
                    min: 1,
                    max: 10,
                  })
                }
                className="w-full h-[45%] min-h-[9px] p-[15%] leading-none hover:bg-blue-100 rounded-b cursor-pointer"
              >
                <img src={Arrow} className="" />
              </div>
            </div>
          </div>
        </div>
        <div
          className="relative px-6 cursor-pointer active:bg-green-100 flex col-span-3 justify-between items-center gap-1 border-1"
          onClick={handleInput}
        >
          <div className="text-xl">Upload Prescription</div>
          <img src={Arrow} className="rotate-[-90deg]" />
          <input type="file" ref={inputRef} className="hidden" />
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
            checked={save}
            onCheckedChange={(checked) => setSave(checked)}
            className="cursor-pointer data-[state=checked]:bg-theme-color1 data-[state=checked]:border-theme-color1"
          />
          Save this prescription
        </label>
      </div>
    </>
  );
};
export default MultiFocalPrescription;

{
  /* <div className="text-xl flex items-center pl-3 border-1">
          PD <br /> Pupillary Distance
        </div>
        <div className="relative col-span-2 px-2 flex items-center justify-center gap-1 border-1">
          {error.pd && (
            <div className="block absolute bottom-1 left-1 text-red-500 text-[11px] w-[85%]">
              value must lie between 0 and 80
            </div>
          )}

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
          </div>
        </div> */
}
