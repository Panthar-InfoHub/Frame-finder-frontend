import personalInfoStore from "@/stores/PersonalInfoStore";
import React from "react";

const SunGlassConfirm = () => {
  const { sunGlassPrescription } = personalInfoStore();
  const { sph_od, sph_os, cyl_od, cyl_os, axis_od, axis_os, pd } =
    sunGlassPrescription;

  return (
    <>
      {/* <div className="text-xl mb-3">
        PD-Pupillary Distance: <span className="text-green-600">{pd}</span>
      </div> */}
      <div className="grid grid-cols-4 w-3/4 h-fit gap-1 mb-3">
        <div className="col-start-2 text-xl grid place-items-center">SPH</div>
        <div className="text-xl grid place-items-center ">CYL</div>
        <div className="text-xl grid place-items-center ">Axis</div>
        <div className="text-xl flex items-center pl-3">Right OD</div>
        <div className="text-xl text-green-600 text-center">{sph_od}</div>
        <div className="text-xl text-green-600 text-center">{cyl_od}</div>
        <div className="text-xl text-green-600 text-center">{axis_od}</div>
        <div className="text-xl flex items-center pl-3 ">Left OS</div>
        <div className="text-xl text-green-600 text-center">{sph_os}</div>
        <div className="text-xl text-green-600 text-center">{cyl_os}</div>
        <div className="text-xl text-green-600 text-center">{axis_os}</div>
      </div>
      <div className="text-xl">
        PD-Pupillary Distance: <span className="text-green-600">{pd}</span>
      </div>
    </>
  );
};

export default SunGlassConfirm;
