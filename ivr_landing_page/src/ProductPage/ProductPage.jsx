import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import ProductImage from "@/assets/ProductImage.jpg";
import Heart from "@/assets/heart_icon.png";
import Share from "@/assets/share_icon.png";
import featuresImage from "@/assets/ProductsPageFeaturesImage.png";
import { FaStar } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import AccordianVideoAdd from "@/ProductPage/Components/AccordianVideoAdd";
import CardCaraousal from "./Components/CardCaraousal";
import Advert1 from "@/components/Advertisments/Advert1";
import Footer from "@/components/Footer/Footer";
const ProductPage = () => {
  const color1 = "black",
    color2 = "blue-400";
  return (
    <div className="w-full">
      <div className="h-52 mb-7">
        <Navbar />
      </div>
      <div className="w-[90%] mx-auto">
        <div className="font-[400] text-4xl">Home | Eyeware</div>
        <div className="mt-10 flex h-[750px] justify-between">
          <div className="max-w-[976px] w-full rounded-md overflow-hidden border-2 drop-shadow-2xl">
            <img
              src={ProductImage}
              alt="Product Image"
              className="w-full h-full"
            />
          </div>
          <div className="max-w-[650px] space-y-8">
            <div className="w-full flex justify-between ">
              <div className="text-[40px]">Tecla</div>
              <div className="flex gap-6 items-center w-fit">
                <img src={Heart} className="w-6 h-6" alt="HeartIcon" />
                <img src={Share} className="w-6 h-6" alt="ShareIcon" />
              </div>
            </div>
            <div className="text-2xl ">
              Zero Power Blue Cut Computer Glasses | Anti Glare, Lightweight &
              Blocks Harmful Rays | 100% UV Protected | Full Rim Rectangular |
              For Men & Women | Large | LB E13737
            </div>

            <div className="flex gap-10 items-center">
              <div className="flex border-2 border-black rounded-full p-2 w-fit h-fit text-2xl space-x-2">
                <div>
                  <div className="flex items-center">
                    4<FaStar className="text-blue-300 text-lg" />
                  </div>
                </div>
                <span>|</span>
                <div className="">12</div>
              </div>
              <div className="flex p-4 pr-10 font-medium space-x-2 bg-blue-200 [clip-path:polygon(100%_0,_90%_51%,_100%_100%,_0_100%,_0_0)] text-lg">
                <div>Buy 1 for 4000/-</div> <span>|</span>{" "}
                <div>2 for 5000/-</div>
              </div>
            </div>

            <div>
              <div className="text-5xl font-semibold">₹ 5000/-</div>
              <div className="font-semibold text-xl">Tax included</div>
            </div>

            <div className="flex gap-4">
              <div
                className={`h-8 w-8 rounded-full bg-${color1} ring-1 ring-offset-2`}
              ></div>
              <div
                className={`h-8 w-8 rounded-full bg-${color2} ring-1 ring-offset-2`}
              ></div>
            </div>

            <div className="flex gap-3">
              <Button className="font-[400] text-lg flex-1 text-white bg-[#00aa78] rounded-lg hover:bg-[#3a826b] active:bg-[#295c4c] cursor-pointer h-[100px]">
                Select Lenses and Purchase
              </Button>
              <Button className="font-[400] text-lg flex-1 text-white bg-[#00aa78] rounded-lg hover:bg-[#3a826b] active:bg-[#295c4c] cursor-pointer h-[100px]">
                Buy Only Frame
              </Button>
            </div>
          </div>
        </div>

        <div className="flex gap-10 mb-15 mt-45">
          <div className="flex gap-3 w-2/3">
            <div className="flex gap-3 flex-col">
              <img
                className="w-150 h-150"
                src={ProductImage}
                alt="ProductImage"
              />
              <img
                className="w-150 h-150"
                src={ProductImage}
                alt="ProductImage"
              />
            </div>
            <div className="flex gap-3 flex-col">
              <img
                className="w-72 h-80 object-cover"
                src={ProductImage}
                alt="ProductImage"
              />
              <img
                className="w-144 h-150 object-cover"
                src={ProductImage}
                alt="ProductImage"
              />
            </div>
          </div>
          <div className="w-1/3">
            <AccordianVideoAdd />
          </div>
        </div>

        <CardCaraousal />
        <Advert1 />
        <img
          src={featuresImage}
          alt="featuresImg"
          className="mx-auto w-[1000px] h-[230px] mt-60"
        />
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
