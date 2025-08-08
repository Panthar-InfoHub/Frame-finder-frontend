import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router";
import Lottie from "lottie-react";
import animationData from "@/assets/summary_animation.json";

const Summary = () => {
  return (
    <div className="w-full h-full text-center pt-45">
      <div className="w-40 h-40 mx-auto">
        <Lottie animationData={animationData} loop={true} />
      </div>
      <div className="w-[700px] h-fit mx-auto text-2xl">
        <div className="font-bold">Thanks for your order</div>
        <div className="">
          Thanks for placing order{" "}
          <span className="text-theme-color1 underline decoration-2 decoration-theme-color1">
            RBD000001!
          </span>
        </div>
        <div className="">
          We will send you a notification within 5 days when it ship
        </div>
        <div className="my-8 font-bold">
          If you have any questions or queries than feel free to get in contact
          us.
        </div>
        <div className="mx-auto w-3/5">
          <Link to="/">
            <Button className="text-xl rounded-full bg-theme-color1 w-full py-6 cursor-pointer hover:bg-green-800">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Summary;
