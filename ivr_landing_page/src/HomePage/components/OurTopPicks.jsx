import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import ourTopPicks1 from "@/assets/ourTopPicks1.png";
import ourTopPicks2 from "@/assets/ourTopPicks2.jpg";
import ourTopPicks3 from "@/assets/ourTopPicks3.png";
import { Heart, Star } from "lucide-react";
import CustomButton from "@/components/Button/CustomButton";
import { Link } from "react-router";

const OurTopPicks = () => {
  const prodArray = [
    {
      image: ourTopPicks1,
      text: "Tecla",
      price: "5000",
      color1: "bg-red-400",
      color2: "bg-red-400",
      rating: "5.6K",
    },
    {
      image: ourTopPicks2,
      text: "Tecla",
      price: "5000",
      color1: "bg-red-400",
      color2: "bg-red-400",
      rating: "5.6K",
    },
    {
      image: ourTopPicks3,
      text: "Tecla",
      price: "5000",
      color1: "bg-red-400",
      color2: "bg-red-400",
      rating: "5.6K",
    },
    {
      image: ourTopPicks1,
      text: "Tecla",
      price: "5000",
      color1: "bg-red-400",
      color2: "bg-red-400",
      rating: "5.6K",
    },
    {
      image: ourTopPicks2,
      text: "Tecla",
      price: "5000",
      color1: "bg-red-400",
      color2: "bg-red-400",
      rating: "5.6K",
    },
    {
      image: ourTopPicks3,
      text: "Tecla",
      price: "5000",
      color1: "bg-red-400",
      color2: "bg-red-400",
      rating: "5.6K",
    },
  ];
  return (
    <div className="w-full mt-40">
      <div className="text-[40px] text-center font-semibold mb-24">
        Our Top Picks
      </div>
      <Tabs
        defaultValue="new_arrivals"
        className="w-full max-h-fit  mt-10 relative"
      >
        <Link to="/filter">
          <Button
            variant="ghost"
            className="absolute right-0 top-2 w-fit h-fit cursor-pointer text-2xl py-4 bg-transparent text-green-400 active:text-green-600 hover:text-green-500 hover:bg-zinc-200"
          >
            See More
          </Button>
        </Link>
        <TabsList className="mx-auto border-2 border-theme-color1 bg-white rounded-full h-fit w-4/12 mb-16">
          <TabsTrigger
            className="p-4 rounded-full hover:cursor-pointer data-[state=active]:bg-theme-color1 data-[state=active]:text-white text-lg"
            value="new_arrivals"
          >
            New Arrivals
          </TabsTrigger>
          <TabsTrigger
            className="p-4 rounded-full hover:cursor-pointer data-[state=active]:bg-theme-color1 data-[state=active]:text-white text-lg"
            value="best_seller"
          >
            Best Seller
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="new_arrivals"
          className="h-4/5 flex flex-wrap gap-y-10 justify-between"
        >
          {prodArray.map((prod) => (
            <div className="h-[524px] w-[457px] relative bg-green-200 hover:bg-green-300 cursor-pointer rounded-2xl overflow-hidden">
              <Link to="/product">
                <div className="absolute text-white font-semibold text-lg bg-theme-color1 p-2 rounded-l-full px-4 top-3.5 right-0 w-fit flex gap-2">
                  <Star fill="white" className="text-white " />
                  <div>{prod.rating}</div>
                </div>
                <img
                  src={prod.image}
                  alt=""
                  className="w-full h-[365px] mb-2 object-cover"
                />
                <div className="flex items-center justify-between px-4 mb-4">
                  <div className="text-[40px]">{prod.text}</div>
                  <Heart className="w-9 h-9" />
                </div>
                <div className="flex items-center justify-between px-4 mb-4">
                  <div className="text-[40px]">₹{prod.price} /-</div>
                  <div className="flex gap-6">
                    <div
                      className={`w-8 h-8 rounded-full ring-2 ring-offset-2 ${prod.color1}`}
                    />
                    <div
                      className={`w-8 h-8 rounded-full ring-2 ring-offset-2 ${prod.color2}`}
                    />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </TabsContent>
        <TabsContent
          value="best_seller"
          className="h-4/5 flex flex-wrap gap-y-10 justify-between"
        >
          {prodArray.map((prod) => (
            <div className="h-[524px] w-[457px] relative bg-green-200 hover:bg-green-300 rounded-2xl overflow-hidden cursor-pointer">
              <Link to="/product">
                <div className="absolute text-white font-semibold text-lg bg-theme-color1 p-2 rounded-l-full px-4 top-3.5 right-0 w-fit flex gap-2">
                  <Star fill="white" className="text-white " />
                  <div>{prod.rating}</div>
                </div>
                <img
                  src={prod.image}
                  alt=""
                  className="w-full h-[365px] mb-2 object-cover"
                />
                <div className="flex items-center justify-between px-4 mb-4">
                  <div className="text-[40px]">{prod.text}</div>
                  <Heart className="w-9 h-9" />
                </div>
                <div className="flex items-center justify-between px-4 mb-4">
                  <div className="text-[40px]">₹{prod.price} /-</div>
                  <div className="flex gap-6">
                    <div
                      className={`w-8 h-8 rounded-full ring-2 ring-offset-2 ${prod.color1}`}
                    />
                    <div
                      className={`w-8 h-8 rounded-full ring-2 ring-offset-2 ${prod.color2}`}
                    />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </TabsContent>
      </Tabs>
      <Button
        variant="ghost"
        className="absolute right-0 top-2 w-fit cursor-pointer text-lg bg-transparent text-green-300 active:text-green-600 hover:text-green-400"
      >
        See More
      </Button>
      <div className="mx-auto w-fit mt-24">
        <CustomButton />
      </div>
    </div>
  );
};

export default OurTopPicks;
