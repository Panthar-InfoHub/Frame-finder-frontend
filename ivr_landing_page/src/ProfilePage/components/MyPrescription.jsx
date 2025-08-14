import React from "react";

const MyPrescription = () => {
    const obj={
        sr:0,
        sl:0,
        cr:0,
        cl:0,
        ar:0,
        al:0,
        apr:0,
        apl:0,
        pdr:0,
        pdl:0
    }
  return (
    <div className="animate-fadeIn">
      <div className="text-4xl mb-10">My Prescriptions</div>
      <div className="text-xl mb-4">
        Name: <span className="text-theme-color1">Ankit Bose</span>
        <br />
        Power Type: <span className="text-theme-color1">Single Vision</span>
        <br />
        Created: <span className="text-theme-color1">Sat Jun 22 2024</span>
      </div>
      <div className="grid grid-cols-3 border-1 border-zinc-500 rounded-lg  place-items-stretch min-w-[400px] w-2/5">
        <div className="text-center py-2 border-1 border-zinc-500 rounded-tl-lg">EYE</div>
        <div className="text-center py-2 border-1 border-zinc-500">RIGHT EYE</div>
        <div className="text-center py-2 border-1 border-zinc-500 rounded-tr-lg">LEFT EYE</div>
        <div className="text-center py-2 border-1 border-zinc-500">SPHERICAL</div>
        <div className="text-center py-2 border-1 border-zinc-500">{obj.sr}</div>
        <div className="text-center py-2 border-1 border-zinc-500">{obj.sl}</div>
        <div className="text-center py-2 border-1 border-zinc-500">CYLINDRICAL</div>
        <div className="text-center py-2 border-1 border-zinc-500">{obj.cr}</div>
        <div className="text-center py-2 border-1 border-zinc-500">{obj.cl}</div>
        <div className="text-center py-2 border-1 border-zinc-500">AXIS</div>
        <div className="text-center py-2 border-1 border-zinc-500">{obj.ar}</div>
        <div className="text-center py-2 border-1 border-zinc-500">{obj.al}</div>
        <div className="text-center py-2 border-1 border-zinc-500">AP</div>
        <div className="text-center py-2 border-1 border-zinc-500">{obj.apr}</div>
        <div className="text-center py-2 border-1 border-zinc-500">{obj.apl}</div>
        <div className="text-center py-2 border-1 border-zinc-500 rounded-bl-lg">PD</div>
        <div className="text-center py-2 border-1 border-zinc-500">{obj.pdr}</div>
        <div className="text-center py-2 border-1 border-zinc-500 rounded-br-lg">{obj.pdl}</div>
      </div>
    </div>
  );
};

export default MyPrescription;
