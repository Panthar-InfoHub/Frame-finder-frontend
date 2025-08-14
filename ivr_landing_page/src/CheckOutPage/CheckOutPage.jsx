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
  const [error, setError] = useState({
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

  const checkAdd = () => {
    const newError={}
    if (!add.pincode) {
      newError.pincode="Enter the pincode";
    }if (add.pincode && add.pincode.length !== 6) {
      newError.pincode= "Enter a valid pincode" ;
    }if (!add.house) {
      newError.house="Enter the house Number or Building name ";
    }if (!add.road) {
      newError.road="Enter the Road name or Area or Colony " ;
    }if (!add.name) {
      newError.name="Enter your Name";
    }if (!add.phone) {
      newError.phone="Enter the phone number";
    }if (add.phone && add.phone.length !== 10) {
      newError.phone="Enter a valid phone number";
    }
    return newError
  };

  const HandleNextLocalNav = () => {
    if (navLocal === "Shipping_Add") {
      const newErrors = checkAdd();
      if (Object.keys(newErrors).length !== 0) setError({...newErrors});
      else{
        if(Object.keys(error).length !== 0)setError({});
        setNavLocal("Payment_Methods");
      } 
    } else if (navLocal === "Payment_Methods") setNavLocal("Summary");
  };

  return (
    <div className="w-[92%] mx-auto overflow-hidden">
      <div className="mt-[2%] text-xl flex space-x-35">
        <div className={navLocal == "Shipping_Add" ? "text-green-400":""}>
          Shipping Address
        </div>
        <div className={navLocal == "Payment_Methods" ? "text-green-400":""}>
          Payment
        </div>
        <div className={navLocal == "Summary" ? "text-green-400":""}>Summary</div>
      </div>
      {navLocal !== "Summary" && (
        <div className="flex justify-between mt-16">
          {/* left- adress area */}
          {navLocal == "Shipping_Add" ? (
            <Shipping_Add
              setAdd={setAdd}
              Check={Check}
              add={add}
              setNavLocal={setNavLocal}
              error={error}
            />
          ) : (
            <Payment_Methods setNavLocal={setNavLocal} />
          )}

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
              {/* <Link to=""> */}
              <Button
                className="text-xl rounded-full bg-theme-color1 w-full py-8 cursor-pointer hover:bg-green-800"
                onClick={HandleNextLocalNav}
              >
                {navLocal == "Shipping_Add" ? "Pay Now" : "Place Order"}
              </Button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      )}
      {navLocal === "Summary" && <Summary />}
    </div>
  );
};

export default CheckOutPage;
