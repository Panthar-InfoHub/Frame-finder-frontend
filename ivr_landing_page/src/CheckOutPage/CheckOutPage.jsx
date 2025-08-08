import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router";
import Shipping_Add from "./components/Shipping_Add.jsx";
import Payment_Methods from "./components/Payment_Methods.jsx";
import Summary from "./components/Summary.jsx";

const CheckOutPage = () => {
  const [navLocal, setNavLocal] = useState("Shipping_Add");
  const [add, setAdd] = useState({
    pincode: "",
    house: "",
    road: "",
    landmark: "",
    name: "",
    phone: "",
  });
  const Check = (value) => {
    const n = value[value.length - 1];
    if (!n) return true;
    if (n >= "0" && n <= "9") return true;
    else return false;
  };

  const HandleNextLocalNav=()=>{
    if(navLocal==="Shipping_Add")setNavLocal("Payment_Methods")
    else if(navLocal==="Payment_Methods")setNavLocal("Summary")
    // else if(navLocal==="Summary")setNavLocal("Shipping_Add")
  }
  return (
    <div className="w-[92%] mx-auto overflow-hidden">
      <div className="mt-[2%] text-xl flex space-x-35">
        <div className="">Shipping Address</div>
        <div className="">Payment</div>
        <div className="">Summary</div>
      </div>
      {navLocal !== "Summary" && (
        <div className="flex justify-between mt-16">
          {/* left- adress area */}
          {navLocal == "Shipping_Add" ? (
            <Shipping_Add setAdd={setAdd} Check={Check} add={add} setNavLocal={setNavLocal} />
          ) : (
            <Payment_Methods setAdd={setAdd} Check={Check} add={add} />
          )}
          {/* <Shipping_Add setAdd={setAdd} Check={Check} add={add} /> */}
          {/* <Payment_Methods setAdd={setAdd} Check={Check} add={add} /> */}

          {/* right- bill area */}
          <div className="flex-[1] animate-slideLeft">
            <div className="text-2xl mb-6">Bill Details</div>
            <div className="p-6 mb-15 rounded-3xl bg-white text-xl border-3 border-black">
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
            <div className="mx-auto w-2/3">
              <Link to="">
                <Button className="text-xl rounded-full bg-theme-color1 w-full py-8 cursor-pointer hover:bg-green-800" onClick={HandleNextLocalNav}>
                  {navLocal=="Shipping_Add"?"Pay Now":"Place Order"}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
      {navLocal === "Summary" && <Summary />}
    </div>
  );
};

export default CheckOutPage;
