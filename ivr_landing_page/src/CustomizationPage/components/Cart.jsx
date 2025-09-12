import React from "react";
import basic_lens from "@/assets/basic_lens.png";
import computer_lens from "@/assets/computer_lens.png";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ProductImage from "@/assets/ProductImage.jpg";
import case_cover from "@/assets/case_cover.jpg";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router";
import { Button } from "@/components/ui/button";

const Cart = ({ setNav,nav }) => {
  let navigate = useNavigate();
  const handleBack=()=>{
    if(nav.prev=="product")
    navigate(-1)
  else setNav({prev:"Prescription",curr:"FillEyeDetails"})
  }
  return (
    <div className="w-screen h-screen flex justify-center items-center overflow-hidden pt-[6%]">
      <div className="relative w-[90%] h-[95%] flex gap-15 pt-15">
        <div className="absolute top-0 left-0 flex gap-2 items-center animate-fadeIn">
          <div className="hover:bg-white/20 hover:shadow-lg border border-transparent hover:border-white/30 hover:backdrop-blur-xs rounded-full hover:cursor-pointer" onClick={() => setNav((state)=>({prev:"ConfirmDetails",curr:state.prev}))}>
            <IoIosArrowBack size={30}/>
          </div>
          <div className="text-3xl">Cart | 2 items</div>
        </div>
        {/* left-product area */}
        <div className="flex-[2] space-y-6 overflow-scroll scrollbar-hidden animate-slideRight p-4">
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
              src={case_cover}
              className="w-[300px] h-[300px] object-cover rounded-2xl flex-[1] border-3"
              alt=""
            />
            <div className="flex-[2] flex flex-col justify-between">
              <div className="flex justify-between text-2xl">
                <div className="">Case Cover</div>
                <div className="text-green-500">Free</div>
              </div>
              <div className="text-lg">
                Sleek eyewear case cover for your glasses.
              </div>
              <div className="flex justify-between text-2xl border-green-500 border-t-3 border-b-3 border-dashed py-5">
                <div className="">Final Price</div>
                <div className="text-green-500">Free</div>
              </div>
              <div className="text-[16px]">Remove</div>
            </div>
          </div>
        </div>
        {/* right-billing-area */}
        <div className="flex-[1] space-y-20 animate-slideLeft p-4">
          <div className="p-6 rounded-3xl bg-white text-xl shadow-[0px_5px_15px_rgba(0,0,0,0.7)]">
            <div className="flex py-6 justify-between">
              <div className="">Total item price</div>
              <div className="">Rs. 5000</div>
            </div>
            <div className="flex py-6 justify-between border-t-3 border-b-3 border-dashed">
              <div className="">Total discount</div>
              <div className="text-green-500">Rs. 3000</div>
            </div>
            <div className="flex py-6 justify-between">
              <div className="">Total Payable</div>
              <div className="">Rs. 2000</div>
            </div>
          </div>
          <div className="flex justify-between items-center p-6 rounded-3xl bg-white text-xl shadow-[0px_5px_15px_rgba(0,0,0,0.7)]">
            <div className="">
              <div className="">GET60% applied</div>
              <div className="text-lg text-zinc-500">
                You are saving Rs. 1200
              </div>
            </div>
            <Button variant="ghost" className="text-xl cursor-pointer py-6">Remove</Button>
          </div>
          <div className="mx-auto w-2/3">
            <Link to="/checkout">
              <Button className="text-xl rounded-full bg-theme-color1 w-full py-8 cursor-pointer hover:bg-green-800">
                Proceed to checkout
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
