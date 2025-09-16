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
import { Link, useLocation, useParams } from "react-router";
const ProductPage = () => {
  const { type } = useParams();
  const { lens_type } = useLocation().state||{};
  console.log("type",type)
  console.log("lens_type",lens_type)
  const color1 = "black",
    color2 = "blue-400";

  return (
    <div className="w-full overflow-hidden">
      <div className="h-52">
        <Navbar />
      </div>
      <div className="w-[90%] mx-auto">
        <div className="flex justify-between gap-15">
          {/* left side */}
          <div className="flex-[3] animate-slideRight">
            <div className="font-[400] text-4xl mb-15">Home | Eyeware</div>
            <div className="relative">
              <div className="absolute z-5 right-0 top-[8%] bg-theme-color1 px-4 py-3 text-white">
                New Arrival
              </div>
              <img
                src={ProductImage}
                alt="Product Image"
                className="max-w-[1200px] w-full max-h-[750px] rounded-md overflow-hidden border-2 drop-shadow-2xl object-cover object-center"
              />
            </div>
            <div className="flex gap-3 w-full mt-20">
              <div className="flex flex-[3] gap-3 flex-col">
                <img
                  className="w-full h-150"
                  src={ProductImage}
                  alt="ProductImage"
                />
                <img
                  className="w-full h-150"
                  src={ProductImage}
                  alt="ProductImage"
                />
              </div>
              <div className="flex flex-[2] gap-50 flex-col">
                <img
                  className="w-full h-80 object-cover"
                  src={ProductImage}
                  alt="ProductImage"
                />
                <img
                  className="w-full h-80 object-cover"
                  src={ProductImage}
                  alt="ProductImage"
                />
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="flex-[2] pt-22 animate-slideLeft">
            <div className="h-[750px] max-w-[650px] space-y-8">
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
                <div className="flex p-4 pr-10 font-medium space-x-2 bg-[#C3FFED] [clip-path:polygon(100%_0,_90%_51%,_100%_100%,_0_100%,_0_0)] text-lg">
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

              {type != "contact_lenses" ? (
                <div className="flex gap-3">
                  <Link to="/customize" state={{ type: "LensType" }} >
                    <Button className="font-[400] text-lg flex-1 text-white bg-[#00aa78] rounded-lg hover:bg-[#3a826b] active:bg-[#295c4c] cursor-pointer h-[100px]">
                      Select Lenses and Purchase
                    </Button>
                  </Link>
                  <Link to="/customize" state={{ type: "Cart" }} >
                    <Button className="font-[400] text-lg flex-1 text-white bg-[#00aa78] rounded-lg hover:bg-[#3a826b] active:bg-[#295c4c] cursor-pointer h-[100px]">
                      Buy Only Frame
                    </Button>
                  </Link>
                </div>
              ) : (
                <Link to="/customize" state={{ type: "Prescription",lens_type }} >
                  <Button className="font-[400] text-2xl w-full text-white bg-[#00aa78] rounded-lg hover:bg-[#3a826b] active:bg-[#295c4c] cursor-pointer h-[100px]">
                    Purchase Power Lens
                  </Button>
                </Link>
              )}
            </div>
            <div className="mb-15 mt-45">
              <AccordianVideoAdd />
            </div>
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
