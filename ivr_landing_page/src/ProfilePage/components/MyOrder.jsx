import React from "react";
import ProductImage from "@/assets/ProductImage.jpg";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const MyOrder = () => {
  //! the usestate for handling the product objects is to be created depending on the backend
  return (
    <div className="animate-fadeIn">
      <div className="text-4xl mb-10 ml-4">My Orders</div>
      <div className="h-[800px] overflow-y-scroll scrollbar-hidden p-4 ">
        <div className="space-y-8 border-b-4 pb-15 border-green-500">
          {/* order details */}
          <div className="bg-white text-xl flex gap-8 px-10 py-8 rounded-3xl shadow-[0px_5px_15px_rgba(0,0,0,0.7)]">
            <div className="">
              Order Id:<span className="font-semibold">123456789</span>
            </div>
            <div className="flex-[1]">
              Order Date:<span className="font-semibold">21/21/</span>
            </div>
            <div className="">
              Total Price:<span className="font-semibold">5000</span>
            </div>
          </div>
          {/* products */}
          <div className="bg-white flex gap-6 px-10 py-12 rounded-3xl shadow-[0px_5px_15px_rgba(0,0,0,0.7)]">
            <img
              src={ProductImage}
              className="w-[300px] h-[300px] object-cover rounded-2xl flex-[1] border-3"
              alt=""
            />
            <div className="flex-[2] flex flex-col justify-between">
              <div className="flex justify-between text-2xl">
                <div className="">Tecla</div>
                <div className="">Rs. 5000/-</div>
              </div>
              <div className="text-lg">
                Zero Power Blue Cut Computer Glasses | Anti Glare, Lightweight &
                Blocks Harmful Rays | 100% UV Protected | Full Rim Rectangular |
                For Men & Women | Large | LB E13737
              </div>
              <div className="text-[20px] text-theme-color1">
                Single/Basic Le....
              </div>
              <div className="flex justify-between text-2xl border-green-500 border-t-3 border-b-3 border-dashed py-5">
                <div className="">Final Price</div>
                <div className="">Rs. 5000/-</div>
              </div>
              <div className="text-[16px]">
                Remove | Delivery Till 25 Aug 2025
              </div>
            </div>
          </div>
          <div className="bg-white flex gap-6 px-10 py-12 rounded-3xl shadow-[0px_5px_15px_rgba(0,0,0,0.7)]">
            <img
              src={ProductImage}
              className="w-[300px] h-[300px] object-cover rounded-2xl flex-[1] border-3"
              alt=""
            />
            <div className="flex-[2] flex flex-col justify-between">
              <div className="flex justify-between text-2xl">
                <div className="">Tecla</div>
                <div className="">Rs. 5000/-</div>
              </div>
              <div className="text-lg">
                Zero Power Blue Cut Computer Glasses | Anti Glare, Lightweight &
                Blocks Harmful Rays | 100% UV Protected | Full Rim Rectangular |
                For Men & Women | Large | LB E13737
              </div>
              <div className="text-[20px] text-theme-color1">
                Single/Basic Le....
              </div>
              <div className="flex justify-between text-2xl border-green-500 border-t-3 border-b-3 border-dashed py-5">
                <div className="">Final Price</div>
                <div className="">Rs. 5000/-</div>
              </div>
              <div className="text-[16px]">
                Remove | Delivery Till 25 Aug 2025
              </div>
            </div>
          </div>
          <div className="bg-white flex gap-6 px-10 py-12 rounded-3xl shadow-[0px_5px_15px_rgba(0,0,0,0.7)]">
            <img
              src={ProductImage}
              className="w-[300px] h-[300px] object-cover rounded-2xl flex-[1] border-3"
              alt=""
            />
            <div className="flex-[2] flex flex-col justify-between">
              <div className="flex justify-between text-2xl">
                <div className="">Tecla</div>
                <div className="">Rs. 5000/-</div>
              </div>
              <div className="text-lg">
                Zero Power Blue Cut Computer Glasses | Anti Glare, Lightweight &
                Blocks Harmful Rays | 100% UV Protected | Full Rim Rectangular |
                For Men & Women | Large | LB E13737
              </div>
              <div className="text-[20px] text-theme-color1">
                Single/Basic Le....
              </div>
              <div className="flex justify-between text-2xl border-green-500 border-t-3 border-b-3 border-dashed py-5">
                <div className="">Final Price</div>
                <div className="">Rs. 5000/-</div>
              </div>
              <div className="text-[16px]">
                Remove | Delivery Till 25 Aug 2025
              </div>
            </div>
          </div>
          <div className="flex flex-row-reverse">
            <Button className=" text-xl ml- px-6 py-8 cursor-pointer bg-theme-color1 hover:bg-green-700">
              Track Order
            </Button>
          </div>
        </div>
        <div className="space-y-8 border-b-4 py-15 border-green-500">
          {/* order details */}
          <div className="bg-white text-xl flex gap-8 px-10 py-8 rounded-3xl shadow-[0px_5px_15px_rgba(0,0,0,0.7)]">
            <div className="">
              Order Id:<span className="font-semibold">123456789</span>
            </div>
            <div className="flex-[1]">
              Order Date:<span className="font-semibold">21/21/</span>
            </div>
            <div className="">
              Total Price:<span className="font-semibold">5000</span>
            </div>
          </div>
          {/* products */}
          <div className="bg-white flex gap-6 px-10 py-12 rounded-3xl shadow-[0px_5px_15px_rgba(0,0,0,0.7)]">
            <img
              src={ProductImage}
              className="w-[300px] h-[300px] object-cover rounded-2xl flex-[1] border-3"
              alt=""
            />
            <div className="flex-[2] flex flex-col justify-between">
              <div className="flex justify-between text-2xl">
                <div className="">Tecla</div>
                <div className="">Rs. 5000/-</div>
              </div>
              <div className="text-lg">
                Zero Power Blue Cut Computer Glasses | Anti Glare, Lightweight &
                Blocks Harmful Rays | 100% UV Protected | Full Rim Rectangular |
                For Men & Women | Large | LB E13737
              </div>
              <div className="text-[20px] text-theme-color1">
                Single/Basic Le....
              </div>
              <div className="flex justify-between text-2xl border-green-500 border-t-3 border-b-3 border-dashed py-5">
                <div className="">Final Price</div>
                <div className="">Rs. 5000/-</div>
              </div>
              <div className="text-[16px]">
                Remove | Delivery Till 25 Aug 2025
              </div>
            </div>
          </div>
          <div className="bg-white flex gap-6 px-10 py-12 rounded-3xl shadow-[0px_5px_15px_rgba(0,0,0,0.7)]">
            <img
              src={ProductImage}
              className="w-[300px] h-[300px] object-cover rounded-2xl flex-[1] border-3"
              alt=""
            />
            <div className="flex-[2] flex flex-col justify-between">
              <div className="flex justify-between text-2xl">
                <div className="">Tecla</div>
                <div className="">Rs. 5000/-</div>
              </div>
              <div className="text-lg">
                Zero Power Blue Cut Computer Glasses | Anti Glare, Lightweight &
                Blocks Harmful Rays | 100% UV Protected | Full Rim Rectangular |
                For Men & Women | Large | LB E13737
              </div>
              <div className="text-[20px] text-theme-color1">
                Single/Basic Le....
              </div>
              <div className="flex justify-between text-2xl border-green-500 border-t-3 border-b-3 border-dashed py-5">
                <div className="">Final Price</div>
                <div className="">Rs. 5000/-</div>
              </div>
              <div className="text-[16px]">
                Remove | Delivery Till 25 Aug 2025
              </div>
            </div>
          </div>
          <div className="bg-white flex gap-6 px-10 py-12 rounded-3xl shadow-[0px_5px_15px_rgba(0,0,0,0.7)]">
            <img
              src={ProductImage}
              className="w-[300px] h-[300px] object-cover rounded-2xl flex-[1] border-3"
              alt=""
            />
            <div className="flex-[2] flex flex-col justify-between">
              <div className="flex justify-between text-2xl">
                <div className="">Tecla</div>
                <div className="">Rs. 5000/-</div>
              </div>
              <div className="text-lg">
                Zero Power Blue Cut Computer Glasses | Anti Glare, Lightweight &
                Blocks Harmful Rays | 100% UV Protected | Full Rim Rectangular |
                For Men & Women | Large | LB E13737
              </div>
              <div className="text-[20px] text-theme-color1">
                Single/Basic Le....
              </div>
              <div className="flex justify-between text-2xl border-green-500 border-t-3 border-b-3 border-dashed py-5">
                <div className="">Final Price</div>
                <div className="">Rs. 5000/-</div>
              </div>
              <div className="text-[16px]">
                Remove | Delivery Till 25 Aug 2025
              </div>
            </div>
          </div>
          <div className="flex flex-row-reverse">
            <Button className=" text-xl ml- px-6 py-8 cursor-pointer bg-theme-color1 hover:bg-green-700">
              Track Order
            </Button>
          </div>
        </div>
        <div className="space-y-8 border-b-4 pt-15 border-green-500">
          {/* order details */}
          <div className="bg-white text-xl flex gap-8 px-10 py-8 rounded-3xl shadow-[0px_5px_15px_rgba(0,0,0,0.7)]">
            <div className="">
              Order Id:<span className="font-semibold">123456789</span>
            </div>
            <div className="flex-[1]">
              Order Date:<span className="font-semibold">21/21/</span>
            </div>
            <div className="">
              Total Price:<span className="font-semibold">5000</span>
            </div>
          </div>
          {/* products */}
          <div className="bg-white flex gap-6 px-10 py-12 rounded-3xl shadow-[0px_5px_15px_rgba(0,0,0,0.7)]">
            <img
              src={ProductImage}
              className="w-[300px] h-[300px] object-cover rounded-2xl flex-[1] border-3"
              alt=""
            />
            <div className="flex-[2] flex flex-col justify-between">
              <div className="flex justify-between text-2xl">
                <div className="">Tecla</div>
                <div className="">Rs. 5000/-</div>
              </div>
              <div className="text-lg">
                Zero Power Blue Cut Computer Glasses | Anti Glare, Lightweight &
                Blocks Harmful Rays | 100% UV Protected | Full Rim Rectangular |
                For Men & Women | Large | LB E13737
              </div>
              <div className="text-[20px] text-theme-color1">
                Single/Basic Le....
              </div>
              <div className="flex justify-between text-2xl border-green-500 border-t-3 border-b-3 border-dashed py-5">
                <div className="">Final Price</div>
                <div className="">Rs. 5000/-</div>
              </div>
              <div className="text-[16px]">
                Remove | Delivery Till 25 Aug 2025
              </div>
            </div>
          </div>
          <div className="bg-white flex gap-6 px-10 py-12 rounded-3xl shadow-[0px_5px_15px_rgba(0,0,0,0.7)]">
            <img
              src={ProductImage}
              className="w-[300px] h-[300px] object-cover rounded-2xl flex-[1] border-3"
              alt=""
            />
            <div className="flex-[2] flex flex-col justify-between">
              <div className="flex justify-between text-2xl">
                <div className="">Tecla</div>
                <div className="">Rs. 5000/-</div>
              </div>
              <div className="text-lg">
                Zero Power Blue Cut Computer Glasses | Anti Glare, Lightweight &
                Blocks Harmful Rays | 100% UV Protected | Full Rim Rectangular |
                For Men & Women | Large | LB E13737
              </div>
              <div className="text-[20px] text-theme-color1">
                Single/Basic Le....
              </div>
              <div className="flex justify-between text-2xl border-green-500 border-t-3 border-b-3 border-dashed py-5">
                <div className="">Final Price</div>
                <div className="">Rs. 5000/-</div>
              </div>
              <div className="text-[16px]">
                Remove | Delivery Till 25 Aug 2025
              </div>
            </div>
          </div>
          <div className="bg-white flex gap-6 px-10 py-12 rounded-3xl shadow-[0px_5px_15px_rgba(0,0,0,0.7)]">
            <img
              src={ProductImage}
              className="w-[300px] h-[300px] object-cover rounded-2xl flex-[1] border-3"
              alt=""
            />
            <div className="flex-[2] flex flex-col justify-between">
              <div className="flex justify-between text-2xl">
                <div className="">Tecla</div>
                <div className="">Rs. 5000/-</div>
              </div>
              <div className="text-lg">
                Zero Power Blue Cut Computer Glasses | Anti Glare, Lightweight &
                Blocks Harmful Rays | 100% UV Protected | Full Rim Rectangular |
                For Men & Women | Large | LB E13737
              </div>
              <div className="text-[20px] text-theme-color1">
                Single/Basic Le....
              </div>
              <div className="flex justify-between text-2xl border-green-500 border-t-3 border-b-3 border-dashed py-5">
                <div className="">Final Price</div>
                <div className="">Rs. 5000/-</div>
              </div>
              <div className="text-[16px]">
                Remove | Delivery Till 25 Aug 2025
              </div>
            </div>
          </div>
          <div className="flex flex-row-reverse">
            <Button className=" text-xl ml- px-6 py-8 cursor-pointer bg-theme-color1 hover:bg-green-700">
              Track Order
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
