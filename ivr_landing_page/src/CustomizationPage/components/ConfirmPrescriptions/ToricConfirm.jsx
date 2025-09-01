import personalInfoStore from "@/stores/PersonalInfoStore";
import React from "react";

const ToricConfirm = () => {
  const { toricPrescription } = personalInfoStore();
  const {
    sph_od,
    sph_os,
    axis_od,
    axis_os,
    power_od,
    power_os,
    box_od,
    box_os,
  } = toricPrescription;
  return (
    <>
      <div className="grid grid-cols-5 w-5/6 h-fit gap-1">
        <div className="col-start-2 text-xl grid place-items-center">SPH</div>
        <div className="text-xl grid place-items-center ">Axis</div>
        <div className="text-xl grid place-items-center ">Power</div>
        <div className="text-xl grid place-items-center ">Box</div>
        <div className="text-xl flex items-center pl-3">Right OD</div>
        <div className="text-xl text-green-600 text-center">{sph_od}</div>
        <div className="text-xl text-green-600 text-center">{axis_od}</div>
        <div className="text-xl text-green-600 text-center">{power_od}</div>
        <div className="text-xl text-green-600 text-center">{box_od}</div>
        <div className="text-xl flex items-center pl-3 ">Left OS</div>
        <div className="text-xl text-green-600 text-center">{sph_os}</div>
        <div className="text-xl text-green-600 text-center">{axis_os}</div>
        <div className="text-xl text-green-600 text-center">{power_os}</div>
        <div className="text-xl text-green-600 text-center">{box_os}</div>
      </div>
    </>
  );
};

export default ToricConfirm;
