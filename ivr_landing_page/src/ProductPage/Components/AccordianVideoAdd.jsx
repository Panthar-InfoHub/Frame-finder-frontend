import React, { useState } from "react";
import Arrow from "@/assets/arrowDown.png";
import Video from "@/assets/productPageVideo.mp4";

const AccordianVideoAdd = () => {
  const [accord, setAccord] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
  });
  const toggle = (id) => {
    if (accord[id]) {
      setAccord((prev) => ({ ...prev, [id]: false }));
    } else {
      setAccord({
        one: false,
        two: false,
        three: false,
        four: false,
        [id]: true,
      });
    }
  };
  return (
    <div>
      <div className="w-[80%] mx-auto">
        <div className="p-3 bg-zinc-100 mb-3 rounded-md overflow-hidden">
          <div className="h-fit font-semibold flex justify-between items-center">
            <div>DETAILS</div>
            <img
              src={Arrow}
              alt="Arrow"
              onClick={() => toggle("one")}
              className={`h-9 w-10 transition-all duration-500 ease-in-out rounded-full p-2 py-3 hover:bg-zinc-200 hover:cursor-pointer ${
                accord.one ? "rotate-180" : ""
              }`}
            />
          </div>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              accord.one ? "max-h-[500px]" : "max-h-0"
            }`}
          >
            • Shop Name - Lenskart <br />
            • Vender Address - Mumbai Crafted in supreme <br />
            • quality IP-plated titanium material <br />
            • Sophisticated Rounds for a classic look • Comes with a
            complimentary micro-fibre cloth and a classic JJ eyewear case <br />
            • Alias - Pro Titanium JJ E13672 Unisex Eyeglasses <br />
            • Product ID: 145910 <br />
          </div>
        </div>
        <div className="p-3 bg-zinc-100 mb-3 rounded-md overflow-hidden">
          <div className="h-fit font-semibold flex justify-between items-center">
            <div>DETAILS</div>
            <img
              src={Arrow}
              alt="Arrow"
              onClick={() => toggle("two")}
              className={`h-9 w-10 transition-all duration-500 ease-in-out rounded-full p-2 py-3 hover:bg-zinc-200 hover:cursor-pointer  ${
                accord.two ? "rotate-180" : ""
              }`}
            />
          </div>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              accord.two ? "max-h-[500px]" : "max-h-0"
            }`}
          >
            • Shop Name - Lenskart <br />
            • Vender Address - Mumbai Crafted in supreme <br />
            • quality IP-plated titanium material <br />
            • Sophisticated Rounds for a classic look • Comes with a
            complimentary micro-fibre cloth and a classic JJ eyewear case <br />
            • Alias - Pro Titanium JJ E13672 Unisex Eyeglasses <br />
            • Product ID: 145910 <br />
          </div>
        </div>
        <div className="p-3 bg-zinc-100 mb-3 rounded-md overflow-hidden">
          <div className="h-fit font-semibold flex justify-between items-center">
            <div>DETAILS</div>
            <img
              src={Arrow}
              alt="Arrow"
              onClick={() => toggle("three")}
              className={`h-9 w-10 transition-all duration-500 ease-in-out rounded-full p-2 py-3 hover:bg-zinc-200 hover:cursor-pointer  ${
                accord.three ? "rotate-180" : ""
              }`}
            />
          </div>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              accord.three ? "max-h-[500px]" : "max-h-0"
            }`}
          >
            • Shop Name - Lenskart <br />
            • Vender Address - Mumbai Crafted in supreme <br />
            • quality IP-plated titanium material <br />
            • Sophisticated Rounds for a classic look • Comes with a
            complimentary micro-fibre cloth and a classic JJ eyewear case <br />
            • Alias - Pro Titanium JJ E13672 Unisex Eyeglasses <br />
            • Product ID: 145910 <br />
          </div>
        </div>
        <div className="p-3 bg-zinc-100 mb-16 rounded-md overflow-hidden">
          <div className="h-fit font-semibold flex justify-between items-center">
            <div>DETAILS</div>
            <img
              src={Arrow}
              alt="Arrow"
              onClick={() => toggle("four")}
              className={`h-9 w-10 transition-all duration-500 ease-in-out rounded-full p-2 py-3 hover:bg-zinc-200 hover:cursor-pointer  ${
                accord.four ? "rotate-180" : ""
              }`}
            />
          </div>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              accord.four ? "max-h-[500px]" : "max-h-0"
            }`}
          >
            • Shop Name - Lenskart <br />
            • Vender Address - Mumbai Crafted in supreme <br />
            • quality IP-plated titanium material <br />
            • Sophisticated Rounds for a classic look • Comes with a
            complimentary micro-fibre cloth and a classic JJ eyewear case <br />
            • Alias - Pro Titanium JJ E13672 Unisex Eyeglasses <br />
            • Product ID: 145910 <br />
          </div>
        </div>
      </div>
      <div
        className={` justify-center items-center transition-all duration-100 ease-in-out overflow-hidden ${
          accord.one || accord.two || accord.three || accord.four || accord.five
            ? "hidden"
            : "flex"
        }`}
      >
        <video
          className="w-fit h-[400px] rounded-lg"
          // controls
          autoPlay
          muted
          loop
        >
          <source src={Video} type="video/mp4" className="h-full w-full" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default AccordianVideoAdd;
