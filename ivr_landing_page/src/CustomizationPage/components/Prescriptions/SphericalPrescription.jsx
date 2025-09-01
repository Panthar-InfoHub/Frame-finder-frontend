import personalInfoStore from "@/stores/PersonalInfoStore";
import React, { useEffect, useRef, useState } from "react";
import Arrow from "@/assets/ArrowDown.png";
import { Checkbox } from "@/components/ui/checkbox";

const SphericalPrescription = ({ save, setSave }) => {
  const { sphericalPrescription, setSphericalPrescription } =
    personalInfoStore();
  const [state, setState] = useState(sphericalPrescription);
  const [error, setError] = useState({});
  const presRef = useRef(null);
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
      console.log("i stopped runnning")
      return;
    }
    console.log("i ran")
    if (state.save && Object.keys(error).length !== 0) setError(false);
    setSphericalPrescription(state);
  }, [state.save]);
  useEffect(() => {
    console.log("sphericalPrescription", sphericalPrescription);
  }, [sphericalPrescription]);

  const uploadPrescription = () => presRef.current.click();

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
      {/* <div className="text-2xl text-center">
        Fill in your Prescription Details for Spherical Lenses
      </div> */}
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

            <div className="h-10 max-[1000px]:hidden flex flex-col justify-between">
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
                <img src={Arrow} className="rotate-180" />
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
                <img src={Arrow} className="" />
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-center gap-1 border-1">
          {error.sph_os && (
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
              value={state.sph_os}
              onChange={(e) =>
                change({
                  val: Number(e.target.value),
                  key: "sph_os",
                  min: -6,
                  max: 6,
                })
              }
              className="flex-[4] h-full text-xl p-1 outline-none border-b-3 focus:border-b-green-300 appearance-none  [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />

            <div className="h-10 max-[1000px]:hidden flex flex-col justify-between">
              <div
                onClick={() =>
                  change({
                    val: 0.01,
                    op: "+",
                    key: "sph_os",
                    min: -6,
                    max: 6,
                  })
                }
                className="w-full h-[45%] min-h-[9px] p-[15%] leading-none hover:bg-blue-100 rounded-t cursor-pointer"
              >
                <img src={Arrow} className="rotate-180" />
              </div>
              <div
                onClick={() =>
                  change({
                    val: 0.01,
                    op: "-",
                    key: "sph_os",
                    min: -6,
                    max: 6,
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
          No. of Box
        </div>
        <div className="relative flex items-center justify-center gap-1 border-1">
          {error.box_od && (
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
              value={state.box_od}
              onChange={(e) =>
                change({
                  val: Number(e.target.value),
                  key: "box_od",
                  min: -20,
                  max: 20,
                })
              }
              className="flex-[4] h-full text-xl p-1 outline-none border-b-3 focus:border-b-green-300 appearance-none  [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />

            <div className="h-10 max-[1000px]:hidden flex flex-col justify-between">
              <div
                onClick={() =>
                  change({
                    val: 0.01,
                    op: "+",
                    key: "box_od",
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
                    val: 0.01,
                    op: "-",
                    key: "box_od",
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
          {error.box_os && (
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
              value={state.box_os}
              onChange={(e) =>
                change({
                  val: Number(e.target.value),
                  key: "box_os",
                  min: -6,
                  max: 6,
                })
              }
              className="flex-[4] h-full text-xl p-1 outline-none border-b-3 focus:border-b-green-300 appearance-none  [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />

            <div className="h-10 max-[1000px]:hidden flex flex-col justify-between">
              <div
                onClick={() =>
                  change({
                    val: 0.01,
                    op: "+",
                    key: "box_os",
                    min: -6,
                    max: 6,
                  })
                }
                className="w-full h-[45%] min-h-[9px] p-[15%] leading-none hover:bg-blue-100 rounded-t cursor-pointer"
              >
                <img src={Arrow} className="rotate-180" />
              </div>
              <div
                onClick={() =>
                  change({
                    val: 0.01,
                    op: "-",
                    key: "box_os",
                    min: -6,
                    max: 6,
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
          className="col-span-3 text-xl cursor-pointer hover:bg-green-100 active:bg-green-200 flex justify-between items-center px-4 border-1"
          onClick={uploadPrescription}
        >
          <div className="">Upload Prescription</div>
          <div className="">
            <img
              src={Arrow}
              className="rotate-270 cursor-pointer py-3 px-2 rounded-full"
            />
          </div>
          <input ref={presRef} type="file" className="hidden" />
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

export default SphericalPrescription;
