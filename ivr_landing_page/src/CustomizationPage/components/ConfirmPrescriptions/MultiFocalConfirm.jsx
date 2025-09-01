import personalInfoStore from "@/stores/PersonalInfoStore";
import React from "react";

const MultiFocalConfirm = () => {
    const { multiFocalPrescription } = personalInfoStore();
  const { sph_od, sph_os, power_od, power_os, box_od, box_os, pd } =
    multiFocalPrescription;
  return (
    <>
      {/* <div className="text-2xl">
        PD-Pupillary Distance: <span className="text-green-600">{pd}</span>
      </div> */}
      <div className="grid grid-cols-4 w-3/4 h-fit gap-1">
        <div className="col-start-2 text-xl grid place-items-center">SPH</div>
        <div className="text-xl grid place-items-center ">Power</div>
        <div className="text-xl grid place-items-center ">Box</div>
        <div className="text-xl flex items-center pl-3">Right OD</div>
        <div className="text-xl text-green-600 text-center">{sph_od}</div>
        <div className="text-xl text-green-600 text-center">{power_od}</div>
        <div className="text-xl text-green-600 text-center">{box_od}</div>
        <div className="text-xl flex items-center pl-3 ">Left OS</div>
        <div className="text-xl text-green-600 text-center">{sph_os}</div>
        <div className="text-xl text-green-600 text-center">{power_os}</div>
        <div className="text-xl text-green-600 text-center">{box_os}</div>
      </div>
    </>
  );
};

export default MultiFocalConfirm;
